posts = [{title: 'Post one', body: 'This is post one.'}];
posts.push({title: 'Post two', body: 'This is post two.'});

function createAPost(post, clb) {
    setTimeout(function() {
        posts.push(post);
        clb();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}->${post.body}</li>`;
        });
        document.querySelector('.root').innerHTML = output;
    }, 1000);
}

createAPost({title: 'Post three', body: 'This is post three.'}, getPosts);
// getPosts();