export const BASE_URL = 'http://evote65-vm.dltc.spbu.ru:5555';

export const getCarriageGroups = () => {
    return fetch(`${BASE_URL}/regulated/carriage/group`, {
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

export const getGroupCarriages = (id) => {
    return fetch(`${BASE_URL}/regulated/carriage/group/${id}`, {
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

export const getAllCarriage = () => {
    return fetch(`${BASE_URL}/regulated/carriage`, {
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

export const postNewCarriageGroup = (request) => {
    return fetch(`${BASE_URL}/regulated/carriage/group`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: request.name,
            description: request.description
        })
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            throw new Error(err.message);
        });
};

export const postNewCarriages = (groupId, carriagesToAdd) => {
    return fetch(`${BASE_URL}/regulated/carriage/group/${groupId}/addCarriages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carriagesToAdd)
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            throw new Error(err.message);
        });
};

export const deleteCarriages = (carriagesArray) => {
    return fetch(`${BASE_URL}/regulated/carriage/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carriagesArray)
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

export const deleteCarriagesFromGroup = (groupId, carriagesArray) => {
    return fetch(`${BASE_URL}/regulated/carriage/group/${groupId}/deleteCarriages`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carriagesArray)
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

export const deleteAllCarriagesAndGroups = () => {
    return fetch(`${BASE_URL}/regulated/carriage/deleteAll`, {
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

export const deleteGroup = (id) => {
    return fetch(`${BASE_URL}/regulated/carriage/group/delete/${id}`, {
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