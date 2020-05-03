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