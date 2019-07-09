let validContact = {
  user: 'UserPass',
  admin: 'AdminPass'
};
let gmail = 10;
let lengthUserEmail = 6;
let lengthNewPass = 5;
let email = prompt('Please, write your e-mail:','');
if (!email) {
  alert('Canceled');
} else if (email.length < lengthUserEmail) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
  alert('I don\'t know you');
} else {
  let currentUser = email.slice(0,-gmail);
  let pass = prompt('Please, write your password:','');
  if (!pass) {
    alert('Canceled');
  } else if (pass !== validContact[currentUser]) {
    alert('Wrong password');
  } else {
    let changePass = confirm('Do you want to change your password?');
    if (!changePass) {
      alert('You have failed the change.');
    } else {
      let checkOldPass = prompt('Please, write the old password:','');
      if (checkOldPass === pass) {
        let firstNewPass = prompt('Please, write the new password:','');
        if (firstNewPass.length < lengthNewPass) {
          alert('It\'s too short password. Sorry.');
        } else {
          let secondNewPass = prompt('Please, write the new password once more:','');
          if (secondNewPass !== firstNewPass) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
            validContact[currentUser] = secondNewPass;
          }
        }
      } else {
        alert('Wrong password.');
      }
    }
  }
}
