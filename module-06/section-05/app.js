const http = new easyHTTP();

// UI components
const tableUI = document.querySelector('.response-table');

class UI {
    addPost(post) {
        const row = tableUI.insertRow(-1);
        const userCell = row.insertCell(-1);
        const titleCell = row.insertCell(-1);
        const bodyCell = row.insertCell(-1);

        userCell.appendChild(document.createTextNode(`${post.user}`));
        titleCell.appendChild(document.createTextNode(`${post.title}`));
        bodyCell.appendChild(document.createTextNode(`${post.body}`));


    }
}

// GET
http.GET('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    if (err === null) {
        const ui = new UI();
        const posts = JSON.parse(response);
        posts.forEach(function(post) {
            const p = {user: post.userId, title: post.title, body: post.body};
            ui.addPost(p);
        });
    } else {
        console.log(err);
    }
});

// POST
const data = {title: 'Esmaeil', body: 'lorem ipsum dolae'};
http.POST('https://jsonplaceholder.typicode.com/posts', data, function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});

// PUT
// TODO: This is identical to POST method

// DELETE
// TODO: This is identical to GET method