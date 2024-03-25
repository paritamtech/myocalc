// JavaScript code for handling real-time validation and calculation
document.querySelectorAll('.form-control').forEach(function(input) {
    input.addEventListener('input', function() {
        var inputValue = parseInt(this.value);
        var max = parseInt(this.getAttribute('max'));
        var isValid = !isNaN(inputValue) && inputValue >= 0 && inputValue <= max;

        if (isValid) {
            this.classList.remove('is-invalid');
            this.nextElementSibling.style.display = 'none';
        } else {
            this.classList.add('is-invalid');
            this.nextElementSibling.style.display = 'block';
        }
    });
});

// Event listener for the Show Results button
document.getElementById('showResultsBtn').addEventListener('click', function() {
    // Check if any field is invalid
    if (document.querySelectorAll('.is-invalid').length > 0) {
        alert("Please fix the errors before proceeding.");
        return;
    }

    // Get values from input fields
    var aaa = parseInt(document.getElementById('aaa').value);
    var bbb = parseInt(document.getElementById('bbb').value);
    var ccc = parseInt(document.getElementById('ccc').value);
    var ddd = parseInt(document.getElementById('ddd').value);
    var eee = parseInt(document.getElementById('eee').value);

    // Calculate cumulative score
    var cumulativeScore = aaa + bbb + ccc + ddd + eee;

    // Determine output
    var output;
    if (cumulativeScore > 5)
        output = 'Definite';
    else if (cumulativeScore > 3)
        output = 'Probable';
    else
        output = 'Unlikely';

    // Determine output background color
    var outputClass;
    if (cumulativeScore > 5)
        outputClass = '#E78895'; // Definite
    else if (cumulativeScore > 3)
        outputClass = '#FFE4C9'; // Probable
    else
        outputClass = '#C6EBC5'; // Unlikely

    // Prepare result message
    var resultMessage = 'The cumulative score is <b>' + cumulativeScore + '</b>.<br>';
    resultMessage += 'The result indicates <b>' + output.toUpperCase() + '</b> possibility of Myocarditis.';

    // Display result
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = resultMessage;
    outputDiv.style.backgroundColor = outputClass;
});

// Reset form inputs and output
document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset input fields to their default state
    document.querySelectorAll('.form-control').forEach(function(input) {
        input.value = '';
    });

    // Clear output
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    outputDiv.style.backgroundColor = ''; // Clear background color
});
