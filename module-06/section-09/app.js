const http = new EasyHTTP();

http.get('https://api.github.com/users')
    .then(users => console.log(users))
    .catch(error => console.log(error));

const user = {username: 'john.doe', name: 'John Doe', email: 'john.doe@example.com'};
http.post('https://jsonplaceholder.typicode.com/users', user)
.then(response => console.log(response))
.catch(error => console.log(error));

http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(response => console.log(response))
.catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((msg) => console.log(msg))
.catch(error => console.log(error));