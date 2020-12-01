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


// DELETE

// PUT