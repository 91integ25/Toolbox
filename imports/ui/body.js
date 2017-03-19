import { Template } from 'meteor/templating';
 
import './body.html';
 
 Template.loginButtons.rendered = function()
 
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
