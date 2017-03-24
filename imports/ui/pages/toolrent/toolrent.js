import './toolrent.html';
import { Accounts } from 'meteor/accounts-base';

custlist = new Mongo.Collection('custlist');

Template.toolrent.events({
  'click .toolrent-btn': function (e) {
    e.preventDefault();
    console.log(`from register: ${e}`);
    console.log('toolrent');
    
      let toolrent = $("#tool").val();
      let price = $("#price").val();
      let location = Geolocation.currentLocation();
      let currentUserId = Meteor.userId();
       
      console.log(toolrent);
      console.log(price);
      console.log(location);
      console.log(currentUserId);
      
      custlist.insert({
            toolrent: toolrent,
            location: location,
            createdBy: currentUserId
        });
        
  	},
})
