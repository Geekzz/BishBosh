// Bish bosh function calculates and displays the results
function bishBosh(bish, bosh, loopLimit) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= loopLimit; i++) {
        let output = '';

        if (i % bish === 0 && i % bosh === 0) {
            output = 'Bish-Bosh';
        } else if (i % bish === 0) {
            output = 'Bish';
        } else if (i % bosh === 0) {
            output = 'Bosh';
        } else {
            output = i;
        }

        // Display the result
        resultDiv.innerHTML += output + '<br>';
    }
}

// Event listener for the Start button
document.getElementById('startButton').addEventListener('click', function () {
    // Get the values from the input fields
    const bish = parseInt(document.getElementById('bishInput').value);
    const bosh = parseInt(document.getElementById('boshInput').value);
    const loopLimit = parseInt(document.getElementById('loopLimit').value);

    // Validate the inputs before running the function
    if (isNaN(bish) || isNaN(bosh) || isNaN(loopLimit) || bish <= 0 || bosh <= 0 || loopLimit <= 0) {
        alert('Please enter valid positive numbers for Bish, Bosh, and Loop Limit.');
        return;
    }

    // Run the Bish-Bosh game
    bishBosh(bish, bosh, loopLimit);
});

// Event listener for the Reset button
document.getElementById('resetButton').addEventListener('click', function () {
    // Clear all inputs
    document.getElementById('bishInput').value = '';
    document.getElementById('boshInput').value = '';
    document.getElementById('loopLimit').value = '';

    // Clear the result display
    document.getElementById('result').innerHTML = '';
});