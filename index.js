const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pswrdLength = 15
let firstPswrdEl = document.querySelector("#pswrd1")
let secondPswrdEl = document.querySelector("#pswrd2")
let numbersEl = document.querySelector("#numbers")
let symbolsEl = document.querySelector("#symbols")
let arr = []

function validateArray(){
    if (!symbolsEl.checked && numbersEl.checked) {
        arr = characters.concat(numbers)
    } else if (symbolsEl.checked && !numbersEl.checked) {
        arr = characters.concat(symbols)
    } else if (!symbolsEl.checked && !numbersEl.checked) {
        arr = characters
    }  else if (symbolsEl.checked && numbersEl.checked) {
        arr = characters.concat(numbers, symbols)
    }
}

validateArray()

function changePswrdLength() {
    let pswrdLengthEl = document.querySelector("#length-input")
    pswrdLength = pswrdLengthEl.value
}

function generatePswrd() {
    let pswrd = ""
    
    for (let i = 0; i < pswrdLength; i++) {
        let RandomIndex = Math.floor(Math.random() * arr.length)
        pswrd += arr[RandomIndex];
    }
    return pswrd;
}

function insertPswrds(){ 
    let firstPswrd = generatePswrd()
    let secondPswrd = generatePswrd()
    firstPswrdEl.value = firstPswrd
    secondPswrdEl.value = secondPswrd
}

function copy(id) {
    let el = document.querySelector("#" + id)
    el.select();
    document.execCommand("copy")
    console.log("Copied to Clipboard")
}