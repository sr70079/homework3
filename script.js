// Assignment Code
var generateBtn = document.querySelector("#generate");

// possible pw criteria

var passwordCriteria = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]



function generatePassword() {

  var randomPassword = [];

  var length = parseInt(prompt("Please choose a password length between 8 and 128"));
    
  if (isNaN(length)) {
    alert("It is not a number, please enter a password length between 8 and 128");
  } else if (length < 8) {
    alert("Password length must be at least 8 characters");
  } else if (length > 128) {
    alert("Password length must mo more than 128 characters");
  };

  var hasLower = confirm("Include Lowercase Character");

  var hasUpper = confirm("Include Uppercase Character");

  var hasNum = confirm("Include Numeric Character");

  var hasSpecial = confirm("Include Special Character");

    // if ( )

  console.log('passwordLength', length);
  console.log('lower', hasLower);
  console.log('numbers', hasUpper);
  console.log('upper', hasNum);
  console.log('lower', hasSpecial);


  for (var i=0; i < length; i++) {
    randomPassword = randomPassword + passwordCriteria[(Math.floor(Math.random() * Math.floor(passwordCriteria.length)))];
  };

  return randomPassword;
  
};

 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);