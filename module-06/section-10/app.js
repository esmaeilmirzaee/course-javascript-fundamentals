// ERROR: async returns a promise.
async function sayHello() {
    return "Hello";
}

console.log(sayHello());

async function anotherHello() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi");
        }, 1000);
    });

    if (false) {
       return await promise;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }

}

anotherHello()
.then(res => console.log(res))
.catch(err => console.log(err));

async function getUsers() {
    const response = await fetch('https://api.github.com/users');

    return await response.json();
}

getUsers().then(users => console.log(users));