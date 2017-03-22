import './navigation.html';
import { Accounts } from 'meteor/accounts-base';

Template.navigation.onCreated(() => {

});

Template.navigation.helpers({

});

Template.navigation.events({
  'click .auth-btn'(e, instance) {
    e.preventDefault();
    console.log(`from auth: ${e}`);

    const emailInput = document.querySelector(".email-input").value,
      passwordInput = document.querySelector(".password-input").value;


      // use to authenticate user Meteor.loginWithPassword(user, password, [callback])

  },
});
