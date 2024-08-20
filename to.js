function generateRandomNumber() {
    // Get the input values
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    // Check if inputs are valid
    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        alert("Please enter valid numbers with min <= max");
        return;
    }

    // Generate random number
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result
    document.getElementById('randomNumber').textContent = randomNumber;
}
