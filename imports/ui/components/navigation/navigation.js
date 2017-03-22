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
	Meteor.loginWithPassword(emailInput, passwordInput, function(error){
		if(Meteor.user()) {
			FlowRouter.go('/tooldata');
		} else {
			var message = "There was an error logging in: </strong>" + error.reason + "</strong> Must register first";

			$('#form-messages').html(message);
		}
		return;
	});

	return false;

  	},
});
