// Assignment Code
var generateBtn = document.querySelector("#generate");

  //character sets
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var upperCase = lowerCase.toUpperCase();

//password generator
function writePassword(){
    
  //password = the generate password function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Write the password to the #password input
  function generatePassword() {

  //prompt #1: length
   var choice = parseInt(prompt("Please specify password length"));
  
    //Sets bookends
    while((choice > 128 || choice < 8)) {
      choice = prompt("Please select a number between 8 and 128!");
    }

        //sets var upperYN as #2 prompt, only if between parameters
    var upperYN = confirm ("Include upper case?");
    //if user selects ok charlist set to upper
      if (upperYN == true){
       var charlist = upperCase; 
     }

          //if cancel then its just lowercase
        else if ( upperYN == false){
          charlist = "";
      }

    var lowerYN = confirm("Inlcude lower case?")
      if (lowerYN == true){
       var charlist1 = charlist + lowerCase;
      }

        else if (lowerYN != true){
          charlist1 = charlist;
       }

    var numbersYN = confirm ("Include numbers?")
      if (numbersYN == true){
          var charlist2 = charlist1 + numbers;
        }
          else if (numbersYN != true){
            charlist2 = charlist1;
          }
        
          //include special characters prompt
    var specialYN = confirm ("Include special characters?");

      //adds specials to the list
          if (specialYN == true){
            var fullChars = charlist2 + special;
          }
          else if (specialYN != true){
            fullChars = charlist2;
          }

      var password = [];  

          // randomizes based on full character set specified
      for ( var i = 0; i < choice; i++ ) {
         var result = fullChars[Math.floor(Math.random() * fullChars.length)];
          password.push(result);
          console.log(result);
            }

  // combined all elements in array to into single string
    password = password.join("");

   // UserInput(joined);
    return password;

    }
          //writes the value of passwordText as password
  passwordText.value = password;  
}
        
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

