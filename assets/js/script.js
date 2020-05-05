/*---------------------------------------------------------------------------------------------*/
/*                                     Odd or Even Number                                      */
/*---------------------------------------------------------------------------------------------*/
function checkOddEven() {
    var oddEvenInput = Number(document.getElementById('odd-even-input').value);
    var oddEvenResult = document.getElementById('odd-even-result');
    if (oddEvenInput % 2 == 0) {
        oddEvenResult.innerHTML = oddEvenInput + ' is an even number';
    } else {
        oddEvenResult.innerHTML = oddEvenInput + ' is a odd number';
    }
}
/*---------------------------------------------------------------------------------------------*/
/*                                          Average                                            */
/*---------------------------------------------------------------------------------------------*/
function checkAverage() {
    var averageInput1 = Number(document.getElementById('input-1').value);
    var averageInput2 = Number(document.getElementById('input-2').value);
    var averageResult = document.getElementById('average-result');
    var average = (averageInput1 + averageInput2) / 2;
    averageResult.innerHTML = average;
}
/*---------------------------------------------------------------------------------------------*/
/*                                         Factorial                                           */
/*---------------------------------------------------------------------------------------------*/
function checkFactorial() {
    var factorialInput = Number(document.getElementById('factorial-input').value);
    var factorialResult = document.getElementById('factorial-result');
    var factorialOutput = 1;
    for (var i = 1; i <= factorialInput; i++) {
        factorialOutput = factorialOutput * i;
    }
    factorialResult.innerHTML = factorialOutput;
}
/*---------------------------------------------------------------------------------------------*/
/*                                    Sum of Even Numbers                                      */
/*---------------------------------------------------------------------------------------------*/
function checkSumOfEvenNumbers() {
    var evenInput = Number(document.getElementById('even-input').value);
    var evenSumResult = document.getElementById('even-sum-result');
    var evenSum = 0;
    for (var i = 0; i <= evenInput; i += 2) {
        evenSum += i;
        evenSumResult.innerHTML = evenSum;
    }
}