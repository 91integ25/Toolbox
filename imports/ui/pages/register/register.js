import './register.html';


Template.register.events({
  'click .register-btn'(e, instance) {
    e.preventDefault();
    console.log(`from register: ${e}`);

    const emailInput = document.querySelector(".email-input").value,
      passwordInput = document.querySelector(".password-input").value;

      // use Accounts.createUser(options, [callback]) with the above values
  },
})
