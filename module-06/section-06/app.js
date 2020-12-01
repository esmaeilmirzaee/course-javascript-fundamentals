posts = [{title: 'Post one', body: 'This is post one.'}];
posts.push({title: 'Post two', body: 'This is post two.'});

function createAPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            if (true) {
                resolve();
            } else {
                reject('Something went wrong...');
            }
        }, 3000);
    });
}

function getPosts() {
        setTimeout(function() {
            let output = '';
            posts.forEach(function(post) {
                output += `<li>${post.title} | ${post.body}</li>`;
            });
            document.body.innerHTML = output;
        }, 2000);
}

createAPost({title: "Another post", body: 'This is a post.'}, getPosts)
.then(getPosts)
.catch(function(error) {
    console.log(error);
});