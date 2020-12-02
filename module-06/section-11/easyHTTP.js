class EasyHTTP {
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        const responseData = await response.json();
        return responseData;
    }
}