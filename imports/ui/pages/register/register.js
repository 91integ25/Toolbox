import './register.html';


Template.register.events({
  'click .register-btn': function (e) {
    e.preventDefault();
    console.log(`from register: ${e}`);

    const email = document.querySelector(".email-in").value,
      password = document.querySelector(".password-in").value;
      location = Geolocation.currentLocation();
    console.log(email);  
      Accounts.createUser({
            email: email,
            password: password,
            location: location
        });
        FlowRouter.go('/');
  	},
})
