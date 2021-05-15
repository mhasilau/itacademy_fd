import { getToken } from './api-hadlers/api-ls-hadlers';
import './styles/style.scss';

window.onload = () => {

    if (window.location.pathname === '/' && !getToken()) {
        window.location.href = './sign-in.html';
    }

    // if (
    //     window.location.pathname !== './templates/sign-in.html' &&
    //     window.location.pathname !== './templates/sign-up.html' &&
    //     !getToken()
    // ) {

    // }

}