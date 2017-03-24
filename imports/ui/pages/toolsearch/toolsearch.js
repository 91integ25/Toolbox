import './toolsearch.html';
import { Accounts } from 'meteor/accounts-base';
import { toolrent } from '../toolrent/toolrent.js';

Template.toolsearch.events({
  'click .toolsearch-btn': function (e) {
    e.preventDefault();
    console.log(`from register: ${e}`);

      var locate = test.find().fetch();
      var tool = $(".tool").val().text();
      console.log(locate);
      
      for(i=0; i<locate.length; i++)

  	},
})