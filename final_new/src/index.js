import { setToken, getToken, setToArray } from './api/local-storage';
import { signIn, initAPI, createUser } from './api/api-handlers';
import './styles/style.scss';

const addArr = [];

initAPI();

window.onload = () => {
    if (
        window.location.pathname !== '/sign-in.html' &&
        window.location.pathname !== '/sign-up.html' &&
        !getToken()
    ) 
    {
        window.location.href = '/sign-in.html';
    }

    if (window.location.pathname === '/sign-in.html') {
        const form = document.getElementById('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signIn(email, password).then( ({idToken, displayName}) => { 
                if (idToken) {
                    setToken(idToken);
                    window.location.href = '/';
                } else alert('Wrong login or password')
            })
        });
    }

    if (window.location.pathname === '/sign-up.html') {
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
        });
    }

    if (window.location.pathname === '/') {
        const inp =  document.getElementById('userText');
        inp.innerHTML = '';
        const butt =  document.createElement('button');
        butt.innerHTML = 'Add';
        const div =  document.getElementById('click');
        document.body.append(inp);
        document.body.append(div);
        div.append(butt);
        let backBtn =  document.createElement('button');
        backBtn.innerHTML = 'Return';
        const clearBtn =  document.createElement('button');
        clearBtn.innerHTML = 'Clear';
        div.append(backBtn);
        div.append(clearBtn);
        
        butt.onclick = () => {
            const area =  document.createElement('div');
            const divBtn = document.createElement('div');
            const text =  document.createElement('p');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete';
            divBtn.classList.add('del');
            area.classList.add('area');
        
            addArr.push(inp.value);
            addArr.forEach( (el, i) => {
                text.innerHTML = addArr[i];
            });

            setToArray(addArr);

            document.body.append(area);
            area.prepend(text);
            area.append(divBtn);
            divBtn.append(deleteBtn);
            console.log(addArr);
            
            deleteBtn.onclick = () => {
                addArr.forEach( () => {
                    area.remove();
                });
                console.log(addArr);
            }
            inp.value = '';
        }
    
        const logOut = document.getElementById('logout');
        logOut.onclick = () => {
            localStorage.removeItem('token');
            window.location.href = '/sign-in.html';
        }

        clearBtn.onclick = () => {
            localStorage.removeItem('id');
            addArr.forEach( (el, i) => {
                addArr.splice(0,addArr.length);
            });
            window.location.href = '/';
        }

        backBtn.onclick = () => {
            let newArr = JSON.parse(localStorage.getItem('id'));
            newArr.forEach ( (el, i) => {
                const area =  document.createElement('div');
                const divBtn = document.createElement('div');
                const text =  document.createElement('p');
                const deleteBtn = document.createElement('button');
                text.innerHTML = el;
                deleteBtn.innerHTML = 'Delete';
                divBtn.classList.add('del');
                area.classList.add('area');
                document.body.append(area);
                area.prepend(text);
                area.append(divBtn);
                divBtn.append(deleteBtn);
            })
        }
    }
}
