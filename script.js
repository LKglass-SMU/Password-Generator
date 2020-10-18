// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+=;/?.,><";
var numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "Please choose password length, must be between 8 and 128 characters"
  );
    //if user does not use interger between 8-128 alert them
  while (
    isNaN(passwordLength) ||
    parseInt(passwordLength) < 8 ||
    parseInt(passwordLength) > 128
  ) {
    alert("Wrong!");
    passwordLength = prompt(
      "Please choose password length, must be between 8 and 128 characters"
    );
  }
  //once user enters correct integer confirm other options
  //confirm option y/n to be added to password
  var hasSpecialCharacters = confirm(
    "Do you want your password to contain special characters?"
  );
  var hasNumbers = confirm("Do you want your password to contain numbers?");
  var hasUpperCase = confirm(
    "Do you want your password to contain uppercase letters?"
  );
  var hasLowerCase = confirm(
    "Do you want your password to contain lower case letters?"
  );
  var possString = "";

  if (
    hasSpecialCharacters === false &&
    hasNumbers === false &&
    hasUpperCase === false &&
    hasLowerCase === false
  ) {
    alert("Must choose one option");

    //giving user all option for password starting with empty string
  } else {
    if (hasSpecialCharacters) {
      possString += specialChar;
    }
    if (hasNumbers) {
      possString += numbers;
    }
    if (hasUpperCase) {
      possString = possString + upperCase;
    }
    if (hasLowerCase) {
      possString += lowerCase;
    }
  }
  console.log(possString);

  var resetPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    resetPassword +=
      possString[Math.floor(Math.random() * possString.length) + 0];
  }
  console.log(resetPassword);
  return resetPassword;
}
generateBtn.addEventListener("click", writePassword);
