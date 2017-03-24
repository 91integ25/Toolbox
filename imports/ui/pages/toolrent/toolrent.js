import './toolrent.html';
import { Accounts } from 'meteor/accounts-base';

custlist = new Mongo.Collection('custlist');

Template.toolrent.events({
  'click .toolrent-btn': function (e) {
    e.preventDefault();
    console.log(`from register: ${e}`);
    console.log('toolrent');
    
      toolrent = $(".tool").val();
      price = $(".price").val();
      location = Geolocation.currentLocation();
      currentUserId = Meteor.userId();

      console.log(toolrent);
      console.log(location);
      console.log(currentUserId);
      
      custlist.insert({
            toolrent: toolrent,
            location: location,
            createdBy: currentUserId
        });
        
  	},
})
