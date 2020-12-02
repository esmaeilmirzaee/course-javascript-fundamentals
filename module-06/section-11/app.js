const http = new EasyHTTP();

http.get('https://api.github.com/users')
    .then(res => res)
    .catch(e => console.log(e.message()));

const user = {username: 'john.doe', email: 'john@doe.com'};

http.post('https://jsonplaceholder.typicode.com/users', user)
.then(res => console.log(res))
.catch(e => console.log(e.message));