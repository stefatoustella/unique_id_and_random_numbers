function generateNumbers() {
    const preR = document.getElementById('preRandoms');

    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const length = document.getElementById('length').value;

    const range = max - min;

    if (length > range) {
        alert("You asked more Numbers! Check again!");
        length = range;
    }

    const numbers = [];

    while (numbers.length < length) {
        const randomNumber = Math.floor(Math.random() * range + 1) + 1;

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    preRandoms.textContent = numbers;
}