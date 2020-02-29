//set variables needed

let amount = parseInt(document.getElementById("amount").value)  
let percent = parseInt(document.getElementById("percent").value)/100 
let tipAmount = amount * percent
let totalDue = amount + tipAmount