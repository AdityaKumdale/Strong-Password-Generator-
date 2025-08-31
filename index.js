


//Better Approach
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

function generatePassword(length,useNumber,useSymbols){
    
    let charPool = LETTERS
    if (useNumber) {
        charPool+=NUMBERS
    }
    if(useSymbols){
        charPool+=SYMBOLS
    }

    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool.charAt(randomIndex);
    }

    return password
}

// const passwordLength = 15;
// const isNumberToggleOn = true ; document.getElementById("isNo")
// const isSymbolToggleOn = false;
const passwordLength = document.getElementById("enter-len");
const isNumberToggleOn = document.getElementById("isNo");
const isSymbolToggleOn = document.getElementById("isSym");
const btn = document.getElementById("gen-pass");
let passwordOne = document.getElementById("pass1");
let passwordTwo = document.getElementById("pass2");



btn.addEventListener('click',function(){
  
    passwordOne.textContent = generatePassword(passwordLength.value, isNumberToggleOn.checked, isSymbolToggleOn.checked);
    passwordTwo.textContent = generatePassword(passwordLength.value, isNumberToggleOn.checked, isSymbolToggleOn.checked);
})

// isNumberToggleOn.addEventListener('change',function(){
//   if(this.checked) {
//   console.log("Checkbox is checked. Value:", checkboxValueNumber,);
// } else {
//   console.log("Checkbox is not checked.");
// }
// })

// Generate two passwords with different settings
// const passwordOne = generatePassword(passwordLength.valueAsNumber, checkboxValueNumber, isSymbolToggleOn);
// const passwordTwo = generatePassword(passwordLength.valueAsNumber, true, true); 

// console.log("Password 1:", passwordOne);
// console.log("Password 2:", passwordTwo);












/////Brute 
// const charactersAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// const charactersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// const charactersWithSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];


// const isNumberToggleOn = true
// const isSymbolToggleOn = false

// let password1 = ""
// let password2 = ""
// const arrLength = characters.length



// //TC = O(L) SC password1  = O(L)  L=15
// for (let i = 0; i < 15; i++) {
//     if (isNumberToggleOn==true && isSymbolToggleOn == true ) {
//         const randomNumber = Math.floor(Math.random()*charactersAll.length)
//         password1 += charactersAll[randomNumber] 

//     } else if(isNumberToggleOn==true && isSymbolToggleOn == false){
//         const randomNumber = Math.floor(Math.random()*charactersNumbers.length)
//         password1 += charactersNumbers[randomNumber] 

//     }else if(isNumberToggleOn==false && isSymbolToggleOn == true){
//         const randomNumber = Math.floor(Math.random()*charactersWithSymbols.length)
//         password1 += charactersWithSymbols[randomNumber] 
//     }else{
//         const randomNumber = Math.floor(Math.random()*characters.length)
//          password1 += characters[randomNumber] 
//     }
//     // const randomNumber = Math.floor(Math.random()*arrLength)
//     // password1 += characters[randomNumber] + numbers[randomNumber] + symbols[randomNumber]
    
//     const randomNumber2 = Math.floor(Math.random()*arrLength)
//     password2 += characters[randomNumber2]
    
// }
// console.log(password1)
// console.log(password2)



