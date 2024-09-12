const length = document.getElementById("length");
const lowercase = document.getElementById("lc");
const uppercase = document.getElementById("uc");
const numbers = document.getElementById("n");
const symbols = document.getElementById("s");
const myh2 = document.getElementById("myh2");
const seperate = document.getElementById("seperate");

function generatePassword(){
    if(lowercase.checked === true || uppercase.checked === true || numbers.checked === true || symbols.checked === true){
        const psLength = length.value;
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbersChars = "1234567890";
        const symbolsChars = "!@#$%^&*()|_-+=?/><:|\}]{[~";

        let allowedChars = "";
        let password = "";

        if(lowercase.checked === true){
            allowedChars += lowercaseChars;
        }
        if(uppercase.checked === true){
            allowedChars += uppercaseChars;
        }
        if(numbers.checked === true){
            allowedChars += numbersChars;
        }
        if(symbols.checked === true){
            allowedChars += symbolsChars;        
        }

        for(let i = 0; i < psLength; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        myh2.textContent = "Your password is:";
        seperate.textContent = password;

    }
    else{
        myh2.textContent = "";
        seperate.textContent = "You must select at least one type of characters";
        seperate.style.color = "red";
    }
}

function reset(){
    length.value = 1;
    lowercase.checked = false;
    uppercase.checked = false;
    numbers.checked = false;
    symbols.checked = false;
}