const passwwordBox = document.getElementById("password");
const genBtn = document.querySelector("button")
const copyBtn = document.getElementById("copy-btn")
const selection = document.querySelector("select")
length = 8; 



const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = `!@#$%^&*()_+}{:""|<>?=-`

const allChars = upperCase + lowerCase + number + symbol

function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]


    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwwordBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwwordBox.value)

    if (passwwordBox.value === "") {
        alert("Please Generate a Password first")
    }else{
        passwwordBox.value = ""
        alert("Password Copied Successfully ✅")
    }
}

selection.addEventListener("change", function () {
    selectedlength = this.selectedIndex
    if(this.selectedIndex === 1){
        length = 12;
    }
    selectedlength = this.selectedIndex
    if(this.selectedIndex === 2){
        length = 15;
    }
     selectedlength = this.selectedIndex
    if(this.selectedIndex === 3){
        length = 20;
    }
})



copyBtn.addEventListener("click", copyPassword)
genBtn.addEventListener("click", createPassword)
