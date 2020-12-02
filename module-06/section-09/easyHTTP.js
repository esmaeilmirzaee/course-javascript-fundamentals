class EasyHTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(users => resolve(users))
                .catch(error => reject(error));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(users => resolve(users))
                .catch(error => reject(error));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
                .then((response) => response.json())
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                header: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
}

