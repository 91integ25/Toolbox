import './navigation.html';
import { Accounts } from 'meteor/accounts-base';

Template.navigation.onCreated(() => {

});

Template.navigation.helpers({

});

Template.navigation.events({
  'click .auth-btn': function (e, template) {
    e.preventDefault();
    console.log(`from auth: ${e}`);

    const emailInput = document.querySelector(".email-input").value,
      passwordInput = document.querySelector(".password-input").value;
      console.log(emailInput);
      console.log(Meteor.user());
	

	return false;

  	},
});
