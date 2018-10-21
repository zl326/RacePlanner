# -*- coding: utf-8 -*-
"""
Created on Wed Oct 17 20:44:45 2018

@author: tom_m
"""

import csv
import pymongo
import json
import copy
import urllib.request as request
import datetime

# USER INPUTS #################################################################

routeFilename = 'routeInterpolated.csv'

apiKey = 'b751290bc7f81afa715bdb6d5eac71ed'
requestPrefix = r'https://api.darksky.net/forecast'

###############################################################################

# Connect to MongoDB
mongoClient = pymongo.MongoClient('mongodb://localhost:81/')
DB = mongoClient['meteor']
DB_weather = DB['weather']


# Import the interpolated route data
file = open(routeFilename, 'r')
routeFile = csv.reader(file)
headers = []
route = {}
nRow = 1
for row in routeFile:
    for index in range(0, len(row)) :
        value = row[index]
        if nRow is 1 :
            route[value] = []
            headers.append(value)
        else :
            route[headers[index]].append(float(value))
    nRow += 1


# Loop through each location
for index in range(0, len(route['distance'])) :
    distance = route['distance'][index]
    latitude = route['latitude'][index]
    longitude = route['longitude'][index]
    
    print('Processing dist = {}, lat = {}, long = {}'.format(distance, latitude, longitude))

    # Make a request for weather data
    requestString = r'{}/{}/{},{}?units=si&extend=hourly'.format(requestPrefix, apiKey, latitude, longitude)
    contents = request.urlopen(requestString)
    data = contents.read().decode("utf-8")
    dataDict = json.loads(data)
    contents.close()
    
    currentTime = dataDict['currently']['time']
    
    # Save a copy of this request to the database
    doc = copy.deepcopy(dataDict)
    doc.update(dataDict['flags'])
    doc.update({
            '_updated' : currentTime,
            '_docType' : 'full',
            '_distance' : distance,
            '_timeString' : datetime.datetime.utcfromtimestamp(currentTime).strftime('%Y-%m-%dT%H:%M:%SZ'),
            '_updatedString' : datetime.datetime.utcfromtimestamp(currentTime).strftime('%Y-%m-%dT%H:%M:%SZ'),
            })
    
    DB_weather.update_one(
            {'_docType' : 'full',
             'latitude' : doc['latitude'],
             'longitude' : doc['longitude'],
             'currently' : {'time' : doc['currently']['time']}},
            {'$set' : doc
            }, upsert=True)
    
    # Loop through each hourly and daily datapoint and insert a document into the database
    docTypes = ['hourly', 'daily']
    for docType in docTypes :
        for hourlyData in dataDict[docType]['data'] :
            doc = copy.deepcopy(hourlyData)
            doc.update(dataDict['flags'])
            doc.update({
                '_updated' : currentTime,
                '_docType' : docType,
                '_distance' : distance,
                '_timeString' : datetime.datetime.utcfromtimestamp(doc['time']).strftime('%Y-%m-%dT%H:%M:%SZ'),
                '_updatedString' : datetime.datetime.utcfromtimestamp(currentTime).strftime('%Y-%m-%dT%H:%M:%SZ'),
                'latitude' : dataDict['latitude'],
                'longitude' : dataDict['longitude'],
                'timezone' : dataDict['timezone'],
                'offset' : dataDict['offset'],
                })
            
            DB_weather.update_one(
                {'_docType' : docType,
                 'latitude' : doc['latitude'],
                 'longitude' : doc['longitude'],
                 'time' : doc['time']},
                {'$set' : doc
                }, upsert=True)
    
    # Also save the "currently" data as if it is hourly data
    doc = copy.deepcopy(dataDict['currently'])
    doc.update(dataDict['flags'])
    doc.update({
        '_updated' : currentTime,
        '_docType' : 'hourly',
        '_distance' : distance,
        '_timeString' : datetime.datetime.utcfromtimestamp(doc['time']).strftime('%Y-%m-%dT%H:%M:%SZ'),
        '_updatedString' : datetime.datetime.utcfromtimestamp(currentTime).strftime('%Y-%m-%dT%H:%M:%SZ'),
        'latitude' : dataDict['latitude'],
        'longitude' : dataDict['longitude'],
        'timezone' : dataDict['timezone'],
        'offset' : dataDict['offset'],
        })
        
#    break;

















