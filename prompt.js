module.exports = {
	// question for manager
	manager: [
		{
			type: 'input',
			name: 'managerName',
			message: 'Please enter the name of the MANAGER:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[A-Za-z]+$/)) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Name must be made of letters only and contain at least one letter';
			},
		},
		{
			type: 'input',
			name: 'managerId',
			message: 'Please enter the Staff ID of the MANAGER:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[0-9]+$/) && value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter the STAFF ID with numbers only';
			},
		},
		{
			type: 'input',
			name: 'managerEmail',
			message: 'Please enter the Email of the MANAGER:',
			// the default show the placeholder for the user easier reference
			default: function () {
				return 'foo@example.com';
			},
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (
					value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) &&
					value.length != 0
				) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter a valid email';
			},
		},
		{
			type: 'input',
			name: 'managerOffice',
			message: 'Please enter the Office Number of the MANAGER:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter an office number';
			},
		},
	],
	// question for the adding more team members or end
	employeeChoice: [
		{
			type: 'list',
			name: 'employeeChoice',
			message: 'What action would you like to take?',
			choices: ['Add an Engineer', 'Add an Intern', 'Done'],
		},
	],
	// question for the intern
	intern: [
		{
			type: 'input',
			name: 'internName',
			message: 'Please enter the name of the INTERN',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[A-Za-z]+$/) && value != '') {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Name must be made of letters only and contain at least one letter';
			},
		},
		{
			type: 'input',
			name: 'internId',
			message: 'Please enter the Staff ID of the INTERN:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[0-9]+$/) && value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter the STAFF ID with numbers only';
			},
		},
		{
			type: 'input',
			name: 'internEmail',
			message: 'Please enter the Email of the INTERN:',
			// the default show the placeholder for the user easier reference
			default: function () {
				return 'foo@example.com';
			},
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (
					value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) &&
					value.length != 0
				) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter a valid email';
			},
		},
		{
			type: 'input',
			name: 'internSchool',
			message: 'Please enter the School of the INTERN:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter the school name of INTERN';
			},
		},
	],
	// question for engineer
	engineer: [
		{
			type: 'input',
			name: 'engineerName',
			message: 'Please enter the name of the ENGINEER',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[A-Za-z]+$/) && value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Name must be made of letters only and contain at least one letter';
			},
		},
		{
			type: 'input',
			name: 'engineerId',
			message: 'Please enter the Staff ID of the ENGINEER:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.match(/^[0-9]+$/) && value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter the STAFF ID with numbers only';
			},
		},
		{
			type: 'input',
			name: 'engineerEmail',
			message: 'Please enter the Email of the ENGINEER:',
			// the default show the placeholder for the user easier reference
			default: function () {
				return 'foo@example.com';
			},
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (
					value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) &&
					value.length != 0
				) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter a valid email';
			},
		},
		{
			type: 'input',
			name: 'engineerGithub',
			message: 'Please enter the GitHub ID of the ENGINEER:',
			// validate if the input is letter only
			validate: function (value) {
				let pass = false;
				if (value.length != 0) {
					pass = true;
				}
				if (pass) {
					return true;
				}
				return 'Please enter a valid GitHub ID';
			},
		},
	],
};

