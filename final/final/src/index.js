import './styles/style.scss';
import './js/form';
import './js/addNews';

import { apiConfig } from './api/api-config';
import { signIn, initAPI } from './api/api-hadlers';
// import { logIn } from './js/login';

window.onload = () => {
    // console.log(window.location);
    initAPI();

    // if (window.location.pathname === '/') {
    //     const redirectBtn = document.getElementById('redirectBtn');
    //     redirectBtn.onclick = () => {
    //         window.location.href = 'sign-in.html';
    //     }
    // }

    if (window.location.pathname === '/sign-in.html') {
        const formIn = document.getElementById('formIn');
        formIn.addEventListener('submit', event => {
            const password = document.getElementById('passwordIn').value;
            const email = document.getElementById('emailIn').value;
            event.preventDefault();
            signIn(email, password).then( response => console.log('RESPONSE', response));
            localStorage.setItem('user', JSON.stringify(formIn));
        });
    }


    // if (window.location.pathname === '/sign-up.html') {
    //     const formUp = document.getElementById('formUp');
    //     formUp.addEventListener('submit', event => {
    //         const password = document.getElementById('password').value;
    //         const email = document.getElementById('email').value;
    //         event.preventDefault();
    //         signUp(email, password).then( response => console.log('RESPONSE', response));
    //         // console.log(email);
    //         // console.log(password);
    //     });
    // }
}

// const me = {
//     name: 'mkhail',
//     age: 29
// }
// localStorage.setItem('name', JSON.stringify(me));
