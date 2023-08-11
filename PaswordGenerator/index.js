const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

const charactersZeroNine = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charactersSpecial = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// 

let passwor1dEl = document.getElementById("password-1")
let passwor2dEl = document.getElementById("password-2")


// get char len from slider
let value = document.querySelector("#value");
let input = document.querySelector("#slider-len");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

let passwaordLen =  parseInt(value.textContent)


// passcodes

function passCode() {
    let x = document.getElementById("value")
    passwaordLen =  parseInt(x.textContent)
    let password = ""
    for (let i =1; i<=passwaordLen; i++) {
        let randint = Math.floor(Math.random() * characters.length)
        password += characters[randint]
    }
    return password
}

function passCodeALL() {
    const allChar = characters.concat(charactersSpecial, charactersZeroNine)
    
    let x = document.getElementById("value")
    passwaordLen =  parseInt(x.textContent)
    
    let password = ""
    
    for (let i =1; i<=passwaordLen; i++) {
        let randint = Math.floor(Math.random() * allChar.length)
        password += allChar[randint]
    }
    return password
}


function passCodeZeroNine() {
    const allChar = characters.concat( charactersZeroNine)
    
    let x = document.getElementById("value")
    passwaordLen =  parseInt(x.textContent)
    
    let password = ""
    
    for (let i =1; i<=passwaordLen; i++) {
        let randint = Math.floor(Math.random() * allChar.length)
        password += allChar[randint]
    }
    return password
}

function passCodeSpecial() {
    const allChar = characters.concat(charactersSpecial)
    
    let x = document.getElementById("value")
    passwaordLen =  parseInt(x.textContent)
    
    let password = ""
    
    for (let i =1; i<=passwaordLen; i++) {
        let randint = Math.floor(Math.random() * allChar.length)
        password += allChar[randint]
    }
    return password
}
// 

function passwordGen() {

    
    // this will check it the "CHECKBOX" is "true" or "false"
    let specialChar = document.getElementById("specialChar").checked
    let zeroNine = document.getElementById("zero-nine").checked
    
    if (specialChar  && zeroNine) {
        password = passCodeALL()
    } else if (specialChar ) {
        password = passCodeSpecial()
    } else if (zeroNine) {
        password = passCodeZeroNine()
    } else {
        password = passCode()
    }

    
    return password
    // console.log(password)   
}

function passwordFill() {
    let password1 = passwordGen()
    let password2 = passwordGen()
    
    passwor1dEl.textContent= password1
    passwor2dEl.textContent= password2
}

// copy

function handleClick1() {
    /* Save value of myText to input variable */
    var input = document.getElementById("password-1").textContent;
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
     
    alert("Copied Text: " + input);
}

function handleClick2() {
    /* Save value of myText to input variable */
    var input = document.getElementById("password-2").textContent;
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
     
    alert("Copied Text: " + input);
}




