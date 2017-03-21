import { Template } from 'meteor/templating';

 
import './body.html';
 
 Template.loginButtons.rendered = function()
 
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};

Router.route('/', {
    template: 'home'
});

Router.route('register', {
    template: 'register'
});

Router.route('toolSearch', {
    template: 'toolSearch'
});

profile = new Mongo.Collection('profile');

Template.login.events({
    'submit form': function(){
       event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        meteor.profile.insert({
            email: email,
            password: password
        });
        Router.go('register');
    }
});



Template.register.events({
    'submit form': function(){
       event.preventDefault();
        var name = $('[name=name]').val();
        var tool = $('[name=tool]').val();
        var price = $('[name=price]').val();
        var location = Geolocation.currentLocation();
        profile.insert({
            name: name,
            tool: tool,
            price: price,
            location: location
        });
        Router.go('toolSearch');
    }
});
