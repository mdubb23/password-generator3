// Assignment code here
var charCodeNumbers = function (low, high) {
  var charNumbers = []
  for (var i = low; i <= high; i++) {
    charNumbers.push(i)
  }
  return charNumbers
};

var numberCharCodes = charCodeNumbers(48, 57);
var upperCaseCharCodes = charCodeNumbers(65, 90);
var lowerCaseCharCodes = charCodeNumbers(97, 122);
var specialCharCodes = charCodeNumbers(33, 46);



var generatePassword = function () {
  // propmts length/types of characters
  var passwordLength = window.prompt("How many character would you like your password?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 to 128 characters")
    generatePassword()
  }
  var numbersConfirm = window.confirm("would you like to include numbers?");
  var upperCaseConfirm = window.confirm("would you like to include uppercase characters?");
  var lowerCaseConfirm = window.confirm("Would you like to include lowercase characters?");
  var specialCharactersConfirm = window.confirm("Would you like to include special characters?");


  // validate selection and generate password
  var passwordCharacters = numberCharCodes
  if (upperCaseConfirm) passwordCharacters = passwordCharacters.concat(upperCaseCharCodes)
  if (lowerCaseConfirm) passwordCharacters = passwordCharacters.concat(lowerCaseCharCodes)
  if (specialCharactersConfirm) passwordCharacters = passwordCharacters.concat(specialCharCodes)

  //randomize order
  var passwords = []
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    passwords.push(String.fromCharCode(randomChar))


  }


  //display password on screen 
  return passwords.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
