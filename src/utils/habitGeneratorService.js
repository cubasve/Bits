import tokenService from './tokenService';

const BASE_URL = '/api/habitgenerator';

export default {
    showHabit,
    createHabit,
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

function createHabit(habitGenerator) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(habitGenerator,)
    }
    return fetch(BASE_URL, options).then(res => res.json());
}