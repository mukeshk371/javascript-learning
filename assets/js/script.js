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
/*---------------------------------------------------------------------------------------------*/
/*                                    Sum of Even Numbers                                      */
/*---------------------------------------------------------------------------------------------*/
function checkLeapYear() {
    var leapYearInput = Number(document.getElementById('leap-year-input').value);
    var leapYearResult = document.getElementById('leap-year-result');
    if (((leapYearInput % 4 == 0) && (leapYearInput % 100 != 0)) || (leapYearInput % 400 == 0)) {
        leapYearResult.innerHTML = leapYearInput + ' is a leap year.';
    } else {
        leapYearResult.innerHTML = leapYearInput + ' is not a leap year.';
    }
}
/*---------------------------------------------------------------------------------------------*/
/*                                      Perfect Number                                         */
/*---------------------------------------------------------------------------------------------*/
function checkPerfectNumber() {
    var perfectNumberInput = Number(document.getElementById('perfect-number-input').value);
    var perfectNumberResult = document.getElementById('perfect-number-result');
    var sum = 0;
    for (var i = 0; i < perfectNumberInput; i++) {
        if (perfectNumberInput % i == 0) {
            sum += i;
        } else if (sum == perfectNumberInput) {
            perfectNumberResult.innerHTML = perfectNumberInput + ' is a perfect number.';
        } else {
            perfectNumberResult.innerHTML = perfectNumberInput + ' is not a perfect number.';
        }
    }
}
/*---------------------------------------------------------------------------------------------*/
/*                               Check Maximum number among all                                 */
/*---------------------------------------------------------------------------------------------*/
function checkMaxNumber() {
    var maxNumberInput1 = Number(document.getElementById('max-number-input1').value);
    var maxNumberInput2 = Number(document.getElementById('max-number-input2').value);
    var maxNumberInput3 = Number(document.getElementById('max-number-input3').value);
    var maxNumberResult = document.getElementById('max-number-result');
    if (maxNumberInput1 > maxNumberInput2) {
        if (maxNumberInput1 > maxNumberInput3) {
            maxNumberResult.innerHTML = maxNumberInput1 + ' is maximum number.';
        } else {
            maxNumberResult.innerHTML = maxNumberInput3 + ' is maximum number.';
        }
    } else {
        if (maxNumberInput2 > maxNumberInput3) {
            maxNumberResult.innerHTML = maxNumberInput2 + ' is maximum number.';
        } else {
            maxNumberResult.innerHTML = maxNumberInput3 + ' is maximum number.';
        }
    }
}
/*---------------------------------------------------------------------------------------------*/
/*                                   Check Profit and Loss                                     */
/*---------------------------------------------------------------------------------------------*/
function checkProfitLoss() {
    var costPrice = Number(document.getElementById('cost-price-input').value);
    var sellingPrice = Number(document.getElementById('selling-price-input').value);
    var profitLossResult = document.getElementById('profit-loss-result');
    var result = sellingPrice - costPrice;
    if (result > 0) {
        profitLossResult.innerHTML = 'Your profit is ₹' + result + '.';
    } else if (result == 0) {
        profitLossResult.innerHTML = 'You have no loss.';
    } else {
        profitLossResult.innerHTML = 'Your loss is ₹' + (result / -1) + '.';
    }
}
/*---------------------------------------------------------------------------------------------*/
/*                                   Array Odd or Even Number                                  */
/*---------------------------------------------------------------------------------------------*/
var oddEvenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function showArray() {
    var showArrayData = document.getElementById('array-data');
    for (var i = 0; i < oddEvenArray.length; i++) {
        var arrayData = document.createElement('SPAN');
        arrayData.classList.add('mr-1');
        arrayData.innerHTML = oddEvenArray[i];
        showArrayData.appendChild(arrayData);
    }
}
function checkArrayEven() {
    var showEvenArrayResult = document.getElementById('array-even-result');
    for (var i = 0; i < oddEvenArray.length; i++) {
        if ((oddEvenArray[i] % 2) == 0) {
            var evenArrayData = document.createElement('SPAN');
            evenArrayData.classList.add('mr-1');
            evenArrayData.innerHTML = oddEvenArray[i];
            showEvenArrayResult.appendChild(evenArrayData);
        }
    }
}
function checkArrayOdd() {
    var showOddArrayResult = document.getElementById('array-odd-result');
    for (var i = 0; i < oddEvenArray.length; i++) {
        if ((oddEvenArray[i] % 2) != 0) {
            var oddArrayData = document.createElement('SPAN');
            oddArrayData.classList.add('mr-1');
            oddArrayData.innerHTML = oddEvenArray[i];
            showOddArrayResult.appendChild(oddArrayData);
        }
    }
}