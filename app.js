function doSum() {
  console.log("I am running");
  let num1 = document.querySelector("#num1").value;
  // let operator = document.querySelector("#operator").value;
  let num2 = document.querySelector("#num2").value;
  let total = num1 + num2;
  // let total = eval(num1 + operator + num2);
  // let total = eval("2"+"-"+"5")
  console.log(total);
  document.querySelector("#result").innerHTML = total;
}
function dosub() {
  let num1 = document.querySelector("#num1s").value;
  let num2 = document.querySelector("#num2s").value;
  let total = num1-num2
  document.querySelector("#result").innerHTML = total;
}
function domultiply() {
  let num1 = document.querySelector("#num1m").value;
  let num2 = document.querySelector("#num2m").value;
  let total = num1*num2
  document.querySelector("#result").innerHTML = total;
}
function dodivide() {
  let num1 = document.querySelector("#num1d").value;
  let num2 = document.querySelector("#num2d").value;
  let total = num1/num2
  document.querySelector("#result").innerHTML = total;
}