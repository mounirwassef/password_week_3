var generateBtn = document.querySelector("#generate");
var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numericCharacters = ["0123456789"];
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var bothCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(lowerCasedCharacters);

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be? (Choose between 8 and 128 characters)");

  console.log(passwordLength);


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please choose a number between 8 and 128.");
    return "";
  }

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one character type to include.");
    return "";
  }

  var possibleChars = "";

  console.log(possibleChars);

  if (lowercase && uppercase && numeric && special) {
    possibleChars += [lowerCasedCharacters + upperCasedCharacters + numericCharacters + specialCharacters];
  } else if (lowercase && uppercase && numeric) {
    possibleChars += [lowerCasedCharacters + upperCasedCharacters + numericCharacters];
  } else if (lowercase && uppercase && special) {
    possibleChars += [lowerCasedCharacters + upperCasedCharacters + specialCharacters];
  } else if (lowercase && numeric && special) {
    possibleChars += [lowerCasedCharacters + numericCharacters + specialCharacters];
  } else if (uppercase && numeric && special) {
    possibleChars += [upperCasedCharacters + numericCharacters + specialCharacters];
  } else if (lowercase && uppercase) {
    possibleChars += [lowerCasedCharacters + upperCasedCharacters];
  } else if (lowercase && numeric) {
    possibleChars += [lowerCasedCharacters + numericCharacters];
  } else if (lowercase && special) {
    possibleChars += [lowerCasedCharacters + specialCharacters];
  } else if (uppercase && numeric) {
    possibleChars += [upperCasedCharacters + numericCharacters];
  } else if (uppercase && special) {
    possibleChars += [upperCasedCharacters + specialCharacters];
  } else if (numeric && special) {
    possibleChars += [numericCharacters + specialCharacters];
  } else if (lowercase) {
    possibleChars += [lowerCasedCharacters];
  } else if (uppercase) {
    possibleChars += [upperCasedCharacters];
  } else if (numeric) {
    possibleChars += [numericCharacters];
  } else if (special) {
    possibleChars += [specialCharacters];
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return password;
}

console.log(password);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

