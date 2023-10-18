//Wage Caluculator

//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let regHours = +document.getElementById("reg-hours-in").value;
  let overHours = +document.getElementById("over-hours-in").value;
  let rate = +document.getElementById("rate-in").value;

  //Process
  let total = rate * (regHours + 1.5 * overHours);

  //Output
  document.getElementById("output").innerHTML = total;
}
