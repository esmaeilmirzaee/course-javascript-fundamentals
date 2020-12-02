const http = new EasyHTTP();

http.get('https://api.github.com/users')
    .then(res => res)
    .catch(e => console.log(e.message()));

const user = {username: 'john.doe', email: 'john@doe.com'};

http.post('https://jsonplaceholder.typicode.com/users', user)
.then(res => console.log(res))
.catch(e => console.log(e.message));

http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(res => console.log(res))
.catch(e => console.log(e.message));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(() => console.log('Content deleted'))
.catch(e => console.log(e.message));