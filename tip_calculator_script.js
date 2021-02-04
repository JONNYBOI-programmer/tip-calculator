/* 
Just messing around with some code

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

let bills;

const tips = [];
const totals = [];
if (bills === Array) {
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
}
*/

// const billValue = Number(document.querySelector('.bill-value').value);           NOTE: Doesn't work outside of 'click' event handler.
// const percentageValue = Number(document.querySelector('.bill-value').value);

// Variables
const btnCheck = document.querySelector('.btn-check-tip');
let tip;

//Tip calculation
function tipCalculator(bill, percentage) {
  tip = bill * (percentage / 100);
  return tip;
}

// What happens when the Check button is pressed.
btnCheck.addEventListener('click', function () {
  // Selecting the elements
  const billValue = Number(document.querySelector('.bill-value').value);
  const percentageValue = Number(
    document.querySelector('.percent-value').value
  );
  const tipEl = document.querySelector('.tip-value');
  const finalBillEl = document.querySelector('.final-bill');

  // Check whether the bill and percentage values are above or below zero. If above calculate the tip, if not tell the user that no values have been entered.
  if (billValue === 0 && percentageValue === 0) {
    tipEl.textContent = 'No values entered!';
  } else {
    // Function call (so the tip gets calculated) and showing it to the user.
    tipCalculator(billValue, percentageValue);
    tipEl.textContent = `Your tip is: ${tip}`;
    finalBillEl.textContent = `Your final bill is: ${billValue + tip}`;

    // Testing
    console.log(billValue, percentageValue);
    console.log(tip);
  }
});
