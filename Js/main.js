const btnGenerate = document.querySelector('#btnGenerate')
const password = document.querySelector('#password')
const passChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v", 
"w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*"]

let senha = ""

btnGenerate.addEventListener('click',() => {
    for(let i = 0; i < 20; i++){
        senha += passChar[Math.floor(Math.random()*passChar.length)]
     }
     password.textContent = senha
     senha=""
})

