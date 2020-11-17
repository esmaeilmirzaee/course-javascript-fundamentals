// Display the result
const displayUI = document.getElementById('message');

// Receive data from a file and get information into a page.
document.getElementById('get-data').addEventListener('click', function (e) {
    // Instantiate XML Http Request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true); // to be asynchronous add true

    xhr.onload = function(err) {
        // Some HTTP Status
        // 200: OK
        // 403: Forbidden
        // 404: Not found
        // 5**: Server error
        if (this.status === 200) {
            console.log(this.responseText);
            displayMessage(this.responseText);
        } else {
            console.log(err);
        }
    };

    xhr.send();
});

// display message
function displayMessage(message) {
    displayUI.innerHTML = `<h1>${message}</h1>`;
}