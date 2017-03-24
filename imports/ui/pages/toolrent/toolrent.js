import './toolrent.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { custlist } from '../lib/custlist.js';

import { Accounts } from 'meteor/accounts-base';

test = new Mongo.Collection(null);

/*Template.toolrent.helpers({
  custlist: function() {
    return custlist.find();
  },
});*/

Template.toolrent.events({
  'click .toolrent-btn': function (e) {
    e.preventDefault();
    console.log(`from toolrent: ${e}`);
    
    
      let toolrent = $("#tool").val();
      let price = $("#price").val();
      let location = Geolocation.currentLocation();
      let currentUserId = Meteor.userId();

      console.log(toolrent);
      console.log(price);
      console.log(location);
      console.log(currentUserId);
      
      test.insert({
            toolrent: toolrent,
            price: price,
            /*location: location,*/
            name: 'Joe'
        });
      test.insert({
            toolrent: "lawnmower",
            price: 10,
            /*location: location,*/
            name: 'Billy'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 8,
            /*location: location,*/
            name: 'Bob'
      })

      test.insert({
            toolrent: "lawnmower",
            price: 20,
            /*location: location,*/
            name: 'Lane'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 15,
            /*location: location,*/
            name: 'Suzy'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 25,
            /*location: location,*/
            name: 'Suzy'
      })
  	},
})
