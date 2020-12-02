document.getElementById('get-text').addEventListener('click', getText());
document.getElementById('get-json').addEventListener('click', getJson());
document.getElementById('get-data').addEventListener('click', getData());

function getText() {
    document.getElementById('info').innerHTML = '';
    fetch('info.txt')
        .then(function(res) {
            return res.text();
        }).then(function(data) {
        document.getElementById('info').innerHTML = data;
    }).catch(function(err){
        console.log(err);
    });
}

function getJson() {
    document.getElementById('info').innerHTML = '';
    fetch('posts.json').then(function(res) {
        return res.json();
    }).then(function(posts) {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('info').innerHTML = output;
    }).catch(function(err) {
        console.log(err);
    });
}

function getData() {
    fetch('https://api.github.com/users')
        .then(function(res) {
            return res.json();
        }).then(function(users) {
            let output = '';
            users.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
        document.getElementById('info').innerHTML = output;
        }).catch(function(err) {
        console.log(err);
    });
}
