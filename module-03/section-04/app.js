document.addEventListener('DOMContentLoaded', startApp);

function startApp(e) {
    e.preventDefault();
    // remove results & loading UI
    clearUI();

    // calculate the payment
    document.getElementById("calculate").addEventListener('click', calculate);
}


// disable loading & results UI before the application starts
function clearUI() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';
}

// show results UI
function displayResults() {
    document.getElementById('results').style.display = 'block';
}

// show loading
function displayLoading() {
    document.getElementById('loading').style.display = 'block';
}

// disable loading
function disableLoading() {
    document.getElementById('loading').style.display = 'none';
}

function calculate(e) {
    displayLoading();
    setTimeout(disableLoading, 500);

    // UI vars
    const amountUI = document.getElementById('amount');
    const interestUI = document.getElementById('rate');
    const yearsUI = document.getElementById('years-repay');

    // Variables
    const principal = amountUI.value > 0 ? parseFloat(amountUI.value) : 0;
    const interest = interestUI.value > 0 ? parseFloat(interestUI.value) : 0;
    const years = yearsUI.value > 0 ? parseFloat(yearsUI.value) : 0;

    const calculatedInterest = interest / 100 / 12;
    const calculatedPayments = years * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').value = monthly.toFixed(2);
        document.getElementById('total-payment').value = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('total-interest').value = ((monthly * calculatedPayments) - principal).toFixed(2);
        displayResults();
    } else {
        showError('Check the inputs.');
    }
}

function showError(errorMessage) {
    clearUI();
    const content = document.querySelector('.content');
    // Create a new element
    const div = document.createElement('div');
    div.className = 'notification is-danger is-light';
    div.id = 'alert-error';
    div.appendChild(document.createTextNode(errorMessage));
    content.insertBefore(div, document.getElementById('error-place'));
    setTimeout(removeError, 1500);
}

function removeError() {
    document.getElementById('alert-error').remove();
}