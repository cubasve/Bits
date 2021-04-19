import tokenService from './tokenService';

const BASE_URL = '/api/habitgenerator';

export default {
    showOneHabit,
    showHabit,
    createHabit,
    updateHabit,
    removeHabit,
}

function showHabit() {
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }
    return fetch(BASE_URL, options).then(res => res.json());  
}

function showOneHabit(habitData) {
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(habitData),
    }
    return fetch(`${BASE_URL}/${habitData.id}`, options)
    .then(res => res.json());
}

function createHabit(habitData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(habitData),
    }
    return fetch(BASE_URL, options).then(res => res.json());
}

function updateHabit(habitData) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(habitData),
    }
    return fetch(`${BASE_URL}/${habitData.id}`, options)
    .then(res => res.json());
}

function removeHabit(habitData) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(habitData),
    }
    return fetch(`${BASE_URL}/${habitData.id}`, options)
    .then(res => res.json());
}