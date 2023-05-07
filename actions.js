function add()
{
  var numOne, numTwo, sum;
  firstnum = parseInt(document.getElementById("num1").value);
  secondnum = parseInt(document.getElementById("num2").value);
  sum = firstnum + secondnum;
  document.getElementById("answer").value = sum;
}