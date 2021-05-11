import '../sass/style.scss';
import { apiConfig } from './api/api-config';
import { signIn, initAPI } from './api/api-handlers';

window.onload = () => {
    // console.log(window.location);
    initAPI();

    if (window.location.pathname === '/') {
        const redirectBtn = document.getElementById('redirectBtn');
        redirectBtn.onclick = () => {
            window.location.href = 'signin.html';
        }
    }

    if (window.location.pathname === '/signin.html') {
        const form = document.getElementById('form');
        form.addEventListener('submit', event => {
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
            event.preventDefault();
            signIn(email, password).then( response => console.log('RESPONSE', response));
            // console.log(email);
            // console.log(password);
        });
    }
}