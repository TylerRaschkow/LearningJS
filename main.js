
while (true) {
		var loginList = [];
    	var username = prompt("Type what you want your username to be");
    	var password = prompt("Type what you want your password to be");
    	var userConfirm = confirm("Do you want your username to be: " + username);
    	var passConfirm = confirm("Do you want your password to be: " + password);
    if (passConfirm === true) {
    	break;
    }
    if (passConfirm === false) {
    	continue;
    }
    if (userConfirm === true) {
      break;
    }
    if (userConfirm === false) {
      continue;
    }
  }
while (true) {
    var userLogin = prompt("Username:");
    var passLogin = prompt("Password:");
    if (userLogin === username) {
    	if (passLogin === password) {
    		 var signal = document.write('Successfully logged in');
    		break;
    	}else if (passLogin !== password) {
    	alert("Your password is incorrect");
    	continue;
    }
    }else if (userLogin !== username){
    	alert("Your usernname is incorrect");
    	continue;
    }
}
loginList.push(username, password);
console.log('Username: ' + username + ' Password: ' + password);
while (true) {
	var change = confirm("Do you want to change your password and username?");
	if (change === true) {
		loginList.splice(loginList, username, password);
		var cUsername = prompt("Type what you want your new username to be");
    	var cPassword = prompt("Type what you want your new password to be");
    	loginList.push(cUsername, cPassword);
    	var signal = document.write('Username and Password Successfully changed');
    	break;
    	console.log('Your new Username is: ' + cUsername + ' Your new password is: ' + cPassword);
    	if (cUsername === username || cPassword === password) {
    		alert("Your new password or new username is the same as your old password or old username!");
    		continue;
    	}
	}else{
		break;
	}
}