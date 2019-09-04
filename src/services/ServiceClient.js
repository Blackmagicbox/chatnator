const ServiceClient = (method, url, body) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        if (body) {
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.setRequestHeader("token","9RxVxgFwBcKf");
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(body ? JSON.stringify(body): null);
    });
};

export default ServiceClient;