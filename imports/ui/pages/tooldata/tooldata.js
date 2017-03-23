import './tooldata.html';
import { Accounts } from 'meteor/accounts-base';

/*userList = new MongoCollection('userList');*/

Template.tooldata.events({
	'submit form': function (e) {
		e.preventDefault();
		choice = document.querySelector("#choice").value;
		console.log(choice);
		
		if(choice='search'){
		FlowRouter.go('/toolsearch');
		} else {
			FlowRouter.go('/toolrent');
		}
		
	}
});