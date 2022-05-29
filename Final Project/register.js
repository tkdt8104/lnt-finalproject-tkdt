var form = document.getElementById('form');
var nameForm = document.getElementById('name');
var email = document.getElementById('email');
var city = document.getElementById('city');
var password = document.getElementById('password');
var confirmPass = document.getElementById('conf-password');
var male = document.getElementById('male');
var female = document.getElementById('female');


form.addEventListener('submit', e => {
    if (!validateData()) {
        e.preventDefault();
    }
    else {
        alert("You are successfully registered");
    }
});

function validateData() {
	var nameValue = nameForm.value;
	var emailValue = email.value;
    var cityValue = city.value;
	var passwordValue = password.value;
    var confirmPassValue = confirmPass.value;
    var flag = 1;
	
	if (nameValue === '') {
		invalidMsg(nameForm, 'Name cannot be blank');
        flag = 0;
	}
    else {
		validMsg(nameForm);
	}
	
	if (emailValue === '') {
		invalidMsg(email, 'Email cannot be blank');
        flag = 0;
	} 
    else if (!isEmail(emailValue)) {
		invalidMsg(email, 'Not a valid email');
        flag = 0;
	}
    else {
		validMsg(email);
	}

    if (cityValue === '') {
		invalidMsg(city, 'City cannot be blank');
        flag = 0;
	}
    else {
		validMsg(city);
	}
	
	if(passwordValue === '') {
		invalidMsg(password, 'Password cannot be blank');
        flag = 0;
	} 
    else if (!isPassword(passwordValue)) {
        invalidMsg(password, 'Invalid password format');
        flag = 0;
    }
    else {
        validMsg(password);
    }

    if (confirmPassValue === '') {
        invalidMsg(confirmPass, 'Please confirm password');
        flag = 0;
    }
    else if (!passMatch(passwordValue, confirmPassValue)) {
		invalidMsg(confirmPass, 'Passwords do not match');
        flag = 0;
	}
    else {
        validMsg(confirmPass);
    }

    if (male.checked == false && female.checked == false) {
        invalidMsg(male, 'Please choose a gender');
        flag = 0;
    }
    else {
        validMsg(male);
    }

    return flag;
}


function isEmail(email) {

    var len = email.length;
    if (len < 6) {
        return false;
    }

    if (email[0] == '.') {
        return false;
    }

    var isDotHere = email.indexOf('.');
    var at = email.indexOf('@');
    if (at == -1 || at == 0 || email[at-1] == '.' || isDotHere == -1) {
        return false;
    }

    var atLast = -1;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            atLast = i;
        }
    }

    
    if (atLast + 1 == len) {
        return false;
    }

    var dotLast = -1;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '.') {
            dotLast = i;
        }
    }

    if (dotLast + 1 == len) {
        return false;
    }

    return true;
}

function invalidMsg(input, message) {
	var container = input.parentElement;
	var msg = container.querySelector('h5');
    msg.style.display = 'block';
	container.className = 'regis-data invalid';
	msg.innerText = message;
}

function validMsg(input) {
	var container = input.parentElement;
	container.className = 'regis-data valid';
    var msg = container.querySelector('h5');
    msg.style.display = 'none';
}

function displayChange() {
    var x = document.getElementById("city").value;
    document.getElementById("city-warning").innerHTML = "You selected: " + x;
}

function changeFontColor() {
    var x = document.getElementById("name");
    x.style.color = "blue";
}

function changeBorderColor() {
    var x = document.getElementById("email");
    x.style.borderColor = "blue";
}

function goBack() {
    var x = document.getElementById("email");
    x.style.borderColor = "black";
}

function inputNamePrompt() {
    let name = prompt("Please enter your name");
    if (name != null) {
      document.getElementById("name").value = name;
    }
}