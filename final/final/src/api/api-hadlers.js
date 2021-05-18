import { authURL, apiConfig, signUpURL } from './api-config';
import firebase from 'firebase/app';

export const signIn = (email, password) => {
    // console.log(email, password);
    return fetch(authURL, {
        method: 'POST',
        body: JSON.stringify ({
            email, 
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'applcation/json'
        }
    }).then( response => response.json() );
}

export const signUp = (username, email, password) => {
    // console.log(email, password);
    return fetch(signUpURL, {
        method: 'POST',
        body: JSON.stringify ({
            username,
            email, 
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'applcation/json'
        }
    }).then( response => response.json() );
}

export const initAPI = () => {
    firebase.initializeApp(apiConfig);
}

export const setToken = token => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}