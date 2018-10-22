# -*- coding: utf-8 -*-
"""
Created on Wed Oct 17 21:15:18 2018

@author: tom_m
"""

import csv
import numpy as np

# USER INPUTS #################################################################

routeFilename = 'route.csv'
interpolatedRouteFilename = 'routeInterpolated.csv'

distanceStep = 10 # km

###############################################################################

# Import the full route data
file = open(routeFilename, 'r')
routeFile = csv.reader(file)
headers = []
data = {}
nRow = 1
for row in routeFile:
    for index in range(0, len(row)) :
        value = row[index]
        if nRow is 1 :
            data[value] = []
            headers.append(value)
        else :
            data[headers[index]].append(float(value))
    nRow += 1

# Find the interpolated locations
interpolated = {}
interpolated['distance'] = np.append(np.arange(0, data['distance'][-1], distanceStep), data['distance'][-1]).tolist()

index1 = 0
index2Start = 1
while index1 < len(interpolated['distance']) :
    distance = interpolated['distance'][index1]
    print('distance = {}'.format(distance))
    
    for index2 in range(index2Start, len(data['distance'])) :
        if data['distance'][index2] >= distance :
            
            # Interpolate between the distances
            fraction = (distance - data['distance'][index2-1]) / (data['distance'][index2] - data['distance'][index2-1])
            for header in headers :
                if header == 'distance' :
                    continue;
                if header not in interpolated :
                    interpolated[header] = []
                interpolated[header].extend([data[header][index2-1] + fraction*(data[header][index2] - data[header][index2-1])])
            
            index1 += 1
            index2Start = index2
            break;
file.close()

# Write output to csv
file = open(interpolatedRouteFilename, 'w+', newline='')
writer = csv.writer(file)
writer.writerow(headers)
for index in range(0, len(interpolated['distance'])) :
    rowData = []
    for header in headers :
        rowData.append(interpolated[header][index])
    writer.writerow(rowData)
    print('Written {}/{}'.format(index+1, len(interpolated['distance'])))
file.close()












