/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}

function getArea(a,b){
  return a * b / 2;
}

function getHypot(a,b){
  return Math.round(Math.sqrt(a * a + b * b));
}

function printHypotenuseAndArea(hypot, area){
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if (area > 50) {
    msg += ` That's a really big triangle!`;
  }
  return msg;
}

function getResultsFromSideLengths(a,b){
  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  let msg;

  if (aOk && bOk) {
    let area = getArea(a,b);
    let hypot = getHypot(a,b);
        msg = printHypotenuseAndArea(hypot, area);
  } else {
    msg = "";
  }

  return {aMsg, bMsg, msg};

}

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let res = getResultsFromSideLengths(a, b);

  document.getElementById("a-msg").innerHTML = res.aMsg;
  document.getElementById("b-msg").innerHTML = res.bMsg;
  document.getElementById("msg").innerHTML = res.msg;
}
