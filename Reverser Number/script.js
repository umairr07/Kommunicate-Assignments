function reverseNumber(num) {
    const reversedNum = num.toString().split('').reverse().join('');

    return parseInt(reversedNum);
}

function showReversedNumber() {
    const number = document.getElementById('numberInput').value;

    if (!number) {
        alert("Enter a number")
    }

    const reversedNumber = reverseNumber(number);

    document.getElementById('result').textContent = `Reversed Number: ${reversedNumber}`;
}
