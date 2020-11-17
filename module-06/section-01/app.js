// Display the result
const displayUI = document.getElementById('message');

// Receive data from a file and get information into a page.
document.getElementById('get-data').addEventListener('click', function (e) {
    // Instantiate XML Http Request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true); // to be asynchronous add true

    // Part Two
    /*
     * readyState Value
     * 0: Request not initialised
     * 1: Server connection established
     * 2: Request received
     * 3: Processing request
     * 4: Request finished & response is ready
     */
    xhr.onreadystatechange = function() {
        if (this.status === 200 && this.readyState === 4) {
            displayMessage(this.responseText);
        }
    };

    xhr.onprogress = function() {
        console.log("on progress");
    };

    xhr.onloadstart = function() {
        console.log('on load start');
    };

    xhr.onloadend = function() {
        console.log('on load end');
    };

    xhr.onerror = function() {
        console.log('error');
    };

    xhr.send();
});

// display message
function displayMessage(message) {
    displayUI.className = 'title';
    displayUI.innerHTML = `<h1>${message}</h1>`;
}