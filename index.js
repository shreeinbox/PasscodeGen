


let passwd1 = ""
let passwd2 = ""
let bNumCheck = true;
let bSymbolCheck = true;

function toggleNum(){
    bNumCheck = !bNumCheck;

}

function toggleSymbol(){
    bSymbolCheck = !bSymbolCheck;

}

function buildCharacters(characters){
    
    if(!bSymbolCheck) characters.splice(62, 29)
    if(!bNumCheck) characters.splice(52, 10)

}


function generatePassword(){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    buildCharacters(characters)
    
    let pswdlength = document.getElementById("paswdlen").value;

    for(i=0; i<pswdlength; i++)
    {
        
        let randomnum1 = Math.floor(Math.random() * characters.length)
        let randomnum2 = Math.floor(Math.random() * characters.length)
        
        passwd1 += characters[randomnum1]
        passwd2 += characters[randomnum2]
    }
   
}

function display(){
    
    passwd1 = ""
    passwd2 = ""
    let paswdEl1 = document.getElementById("pswrd1");
    let paswdEl2 = document.getElementById("pswrd2");
   
    generatePassword();
    
    if (passwd1) paswdEl1.textContent = passwd1;
    if (passwd2) paswdEl2.textContent = passwd2;   
}

function copyPswd(npswd){
    console.log("here");
    if (npswd === 1) {
        let copyText = document.getElementById("pswrd1");
        navigator.clipboard.writeText(copyText.textContent); 
    } else {
        let copyText = document.getElementById("pswrd2");
        navigator.clipboard.writeText(copyText.textContent); 
    }

}