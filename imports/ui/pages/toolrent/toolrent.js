import './toolrent.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { custlist } from '../lib/custlist.js';

import { Accounts } from 'meteor/accounts-base';

import '../toolsearch/toolsearch.html';

test = new Mongo.Collection(null);

/*Template.toolrent.helpers({
  custlist: function() {
    return custlist.find();
  },
});*/


Template.toolrent.events({
  'click .toolrent-btn': function (e) {
    e.preventDefault();

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
      });
      test.insert({
            toolrent: "chainsaw",
            price: 8,
            /*location: location,*/
            name: 'Bob'
      });
      test.insert({
            toolrent: "lawnmower",
            price: 20,
            /*location: location,*/
            name: 'Lane'
      });
      test.insert({
            toolrent: "chainsaw",
            price: 15,
            /*location: location,*/
            name: 'Suzy'
      });
      test.insert({
            toolrent: "chainsaw",
            price: 25,
            /*location: location,*/
            name: 'Suzy'
      });
         $('#tool').val('');
        $('#price').val('');
  	},
})

Template.toolsearch.events({
  'click .toolsearch-btn': function (e) {
      e.preventDefault();

      const locate = test.find().fetch();
      const searchedTool = $('#tool').val();

      const locateLen = locate.length;
      for (let i = 0; i < locateLen; i++) {


        if (searchedTool === locate[i].toolrent) {
          const tName = locate[i].name;
          const tRent = locate[i].toolrent;
          const tPrice = locate[i].price;

         $('#userpost').append('<div class="row"><div class="col-md-12">' +
         '<p class="text-left"> <strong>Name:</strong> ' + tName +
         '</p><p class="text-left"><strong>Tool:</strong> ' + tRent +
         '</p><p class="text-left"><strong>$ per hour:</strong> ' + tPrice +
         '<br><button type="submit" class="btn btn-primary pull-left">email</button></p></div></div>');
        }
      }
        $('#tool').val('');

  }
})
