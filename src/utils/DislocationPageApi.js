export const BASE_URL = 'http://evote65-vm.dltc.spbu.ru:5555';

export const getTables = (selectedId) => {
    return fetch(`${BASE_URL}/regulated/carriage/locationTable`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedId)
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