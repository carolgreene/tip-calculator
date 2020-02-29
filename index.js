//set variables needed



let button = document.getElementById("button");
button.addEventListener('click', function(e) {
  //debugger  
  //e.preventDefault()
  let billAmount = document.getElementById("bill_amount")
  let percent = parseInt(document.getElementById("percent").value)
  let billAmountParsed = parseInt(billAmount.value)
  
  //let totalDue = (billAmountParsed + tipAmount)
  //console.log('billAmountParsed:',billAmountParsed)
  //console.log('percent', percent.toFixed(2))
  let totalDue = calculateTip(billAmountParsed, percent)

  displayResults(totalDue)
}, false)

function calculateTip(billAmountParsed, percent) {
  let tipAmount = (billAmountParsed.toFixed(2)) * (percent/100)

  console.log("tip amount is", tipAmount)
  let totalDue = billAmountParsed + tipAmount
  //console.log("total due:", totalDue.toFixed(2))
  return totalDue
}

function displayResults(totalDue) {
  console.log("total due:",totalDue.toFixed(2))
  let total = document.getElementById("total")
  total.innerHTML = totalDue.toFixed(2)
}