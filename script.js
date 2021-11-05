// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets to choose for password
// Numeric character set
// Upper case alphabets
// Lower case alphabets
// Special character set

// Change strings into single element arrays using split()

var specialStrArr = "~!@#$%^&*()_+".split("");
var upperCaseStrArr = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCaseStrArr = "qwertyuiopasdfghjklzxcvbnm".split("");
var numericStrArr = "0123456789".split("");

// User choices of length, special chars, uppercase, lowercase, and numeric chars
// Store user choices to variables

function generatePassword() {
    var userCharPool = [];
    while (userCharPool.length === 0) {
        var userChoiceLength = parseInt(prompt("Enter password length 8 through 128."));
        while (userChoiceLength < 8 || userChoiceLength > 128 || userChoiceLength === NaN) {
            userChoiceLength = parseInt(prompt("Password length must have at least 8 characters."));
        }

        var userChoiceLowerCase = confirm("Click OK to confirm having lowercase characters.");
        if (userChoiceLowerCase) {
            copyArrayPool(lowerCaseStrArr, userCharPool);
        }    
    
        var userChoiceUpperCase = confirm("Click OK to confirm having uppercase characters.");
        if (userChoiceUpperCase) {
            copyArrayPool(upperCaseStrArr, userCharPool);
        }
    
        var userChoiceNumbers = confirm("Click OK to confirm having numeric characters.");
        if (userChoiceNumbers) {
            copyArrayPool(numericStrArr, userCharPool);
        }
        
        var userChoiceSpecial = confirm("Click OK to confirm having special characters.");
        if (userChoiceSpecial) {
            copyArrayPool(specialStrArr, userCharPool);
        } 

        if (userCharPool.length === 0) {
            alert("Must select at least one character type. Try again");
            continue;
        }

        var passwordArr = [];

        for (var i = 0; i < userChoiceLength; i++) {
        var randomIndex = Math.floor(Math.random() * userCharPool.length);
        passwordArr.push(userCharPool[randomIndex]);
        }
        return passwordArr.join("");
    }
}

function copyArrayPool(arr, userCharPool) {
    for (var i = 0; i < arr.length; i++) {
        userCharPool.push(arr[i]);
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);