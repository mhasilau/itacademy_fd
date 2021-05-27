import firebase from 'firebase/app';
import 'firebase/auth'
import { authURL, apiConfig, signUpURL } from './api-config';
import { setToken, getToken } from './local-storage';

export const initAPI = () => {
    firebase.initializeApp(apiConfig);
}

export const signIn = (email, password) => {
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

export const createUser = async (email, password, username, bday, gender) => {
    const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log('response', response));

    await fetch(`${signUpURL}/users.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json'
        },
        body: JSON.stringify({
            email,
            username,
            bday,
            gender
        })
    }).then (res => res.json())
    .then(result => console.log(result))

    await signIn(email, password).then( ({ idToken }) => {
        if (idToken) {
            setToken(idToken);
            window.location.href = '/';
        } else alert('Something wrong...')
    })
}
