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
        },
        {
            toolrent: "lawnmower",
            price: 10,
            /*location: location,*/
            name: 'Billy'
      },
      {
            toolrent: "chainsaw",
            price: 8,
            /*location: location,*/
            name: 'Bob'
      },
      {
            toolrent: "lawnmower",
            price: 20,
            /*location: location,*/
            name: 'Lane'
      },
      {
            toolrent: "chainsaw",
            price: 15,
            /*location: location,*/
            name: 'Suzy'
      },
      {
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

      var locate = test.find().fetch();
      var searchedTool = $('#tool').val();
  
     
      for(var i = 0; i < locate.length; i++){
       

        if(searchedTool === locate[i].toolrent){
         var toolrent = $('<p>').html("Name: " + locate[i].toolrent + " <button type='submit'>email</button");
         var name = $('<p>').html("Tool: " + locate[i].name);
         var price = $('<p>').html("$ per hour: " +locate[i].price);

         $('#userpost')
         .append(name)
         .append(toolrent)
         .append( price);
          console.log( price);
        }
      }
        $('#tool').val('');

  }
})
