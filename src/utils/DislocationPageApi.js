export const BASE_URL = 'http://evote65-vm.dltc.spbu.ru:5555';

export const getAllTables = () => {
    return fetch(`${BASE_URL}/regulated/carriage/locationTable`, {
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