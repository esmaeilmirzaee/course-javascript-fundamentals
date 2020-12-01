function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET
easyHTTP.prototype.GET = function(url, callback) {
    this.http.open('GET', url, true);

    const that = this;
    this.http.onload = function() {
        if (that.http.status === 200) {
            callback(null, that.http.responseText);
        } else {
            callback('Error', that.http.status);
        }
    };

    this.http.send();
};

// POST
easyHTTP.prototype.POST = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);

    };

    this.http.send(JSON.stringify(data));
};

// PUT
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function() {

});

// DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function() {

});