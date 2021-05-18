import firebase from 'firebase/app';
require('firebase/auth');
import moment from 'moment';
import { apiConfig } from './api/api-config';
import { setToken, getToken } from './ls-handlers';
import { signIn, initAPI, createUser, addTodo } from './api/api-handlers';
require('firebase/app');
import '../sass/style.scss';

initAPI();

window.onload = () => {

    if (
        window.location.pathname !== '/signin.html' &&
        window.location.pathname !== '/signup.html' &&
        !getToken()
    ) 
    {
            window.location.href = 'signin.html';
    }

    if (window.location.pathname === '/signin.html') {
        const form = document.getElementById('form');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signIn(email, password).then( ({idToken}) => { 
                if (idToken) {
                    setToken(idToken);
                    window.location.href = '/';
                } else alert('не то пальто')
            })

        });
    }

    if (window.location.pathname === '/signup.html') {
        const form = document.getElementById('form');
        form.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const username = document.getElementById('username').value;
        const bday = document.getElementById('bday').value;
        const male = document.getElementById('male');

        const gender = male.checked ? 'male' : 'female';
        createUser(email, password, username, bday, gender);

        // console.log(email, password, username, bday, gender);
        });
    }

    if (window.location.pathname === '/') {
        const addBtn = document.getElementsByClassName('addTodoBtn');

        addBtn.onclick = () => {
            const todoInp = document.getElementById('todoinp');
            const todo = {
                title: todoInp.value,
                date: moment().format()
            }
            console.log('test');
        }
    }
}