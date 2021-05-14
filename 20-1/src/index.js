// import '../sass/style.scss';
import { apiURL } from './api/api-config';
import { signIn, initAPI } from './api/api-handler';

window.onload = () => {
    // console.log(window.location);
    initAPI();

    if (window.location.pathname === '/') {
        const redirectBtn = document.getElementById('redirectBtn');
        redirectBtn.onclick = () => {
            window.location.href = 'sign-in.html';
        }
    }

    if (window.location.pathname === '/sign-in.html') {
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