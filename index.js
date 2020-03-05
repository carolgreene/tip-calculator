//set variables needed
const button = document.getElementById("button");
const clear = document.getElementById("clear");

button.addEventListener('click', function(e) {  
  const billAmountCents = document.getElementById("bill_amount").value * 100
  const percent = parseInt(document.getElementById("percent").value)
  const totalDue = calculateTip(billAmountCents, percent)

  displayResults(totalDue)
}, false)

clear.addEventListener('click', function(e) {
  clearFields()
})

function calculateTip(billAmountCents, percent) {
  const tipAmount = (billAmountCents * (percent/100))/100  
  const calculatedTotalDue = ((billAmountCents/100) + tipAmount).toFixed(2)
  
  return calculatedTotalDue   //need to return this bc totalDue is equal to the return value of this function
}

function displayResults(totalDue) {
  const total = document.getElementById("total")
  total.innerText = totalDue
}

function clearFields() {
  document.getElementById("bill_amount").value = ""
  document.getElementById("percent").selectedIndex = 0
  document.getElementById("total").innerText = ""
}