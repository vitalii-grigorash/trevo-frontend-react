export const BASE_URL = 'http://evote65-vm.dltc.spbu.ru:5555';

export const getRequestType = () => {
    return fetch(`${BASE_URL}/operational/station/requestType`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.ok ? res : Promise.reject(res))
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => data)
        .catch((err) => {
            throw new Error(err.message);
        });
};

export const postRequest = (request) => {
    return fetch(`${BASE_URL}/operational/station/request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            requestTypeId: request.requestTypeId,
            params: request.params
        })
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            throw new Error(err.message);
        });
};

export const getRequestHistoryList = () => {
    return fetch(`${BASE_URL}/operational/station/request`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.ok ? res : Promise.reject(res))
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => data)
        .catch((err) => {
            throw new Error(err.message);
        });
};

export const removeHistoryRequest = (id) => {
    return fetch(`${BASE_URL}/operational/station/request/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            throw new Error(err.message);
        });
}