// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  const amount = document.getElementById("loan-amount").value;
  const years = document.getElementById("loan-years").value;
  const rate = document.getElementById("loan-rate").value;

  return {amount, years, rate};
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  let i = (rate /100) / 12;
  let n = years * 12;
  return (
    (amount * i) / 
    (1 - Math.pow((1+i),-n)));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  let values = getFormValues();
  let monthlyPayment = calcMonthlyPayment(values.amount, values.years, values.rate);
  let displayMonthlyPayment = document.getElementById("calc-monthly-payment");
  displayMonthlyPayment.innerHTML = monthlyPayment;
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
   document.getElementById("loan-amount").value = 100;
   document.getElementById("loan-years").value = 5;
   document.getElementById("loan-rate").value = 10;
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
