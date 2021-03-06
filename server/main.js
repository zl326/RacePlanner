import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

DB_Weather = new Mongo.Collection('weather');


function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});

Meteor.methods({
  'user.register' (data) {
      Accounts.createUser({
          email: data.email,
          password: data.password
      });
  }
})

Meteor.publish('weather', function () {
  return DB_Weather.find({_distance:10}, {});
});
