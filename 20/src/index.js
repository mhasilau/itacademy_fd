import '../style/style.scss';
import { Clear, template } from '../js/func.js';

// template;

const ul = document.createElement('ul');

const buttCopmleted =  document.createElement('button');
buttCopmleted.innerHTML = 'Copmleted';
document.body.append(buttCopmleted);

const buttIncopmleted =  document.createElement('button');
buttIncopmleted.innerHTML = 'Incopmleted';
document.body.append(buttIncopmleted);

const buttClear =  document.createElement('button');
buttClear.innerHTML = 'Clear';
document.body.append(buttClear);

let todos;
let count = 0;

const fetchTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => todos = json)
}

const getTodos = async () => {
    await fetchTodos();
}
getTodos();


buttCopmleted.onclick  = () => {
    // Clear;
    ul.innerHTML = '';
    todos.forEach(item => {
        if (item.completed == true) {
            const li =  document.createElement('li');
            li.innerHTML = item.title;
            ul.prepend(li);
            document.body.append(ul);
            li.onclick = () => {
                count++;
                if (count % 2) {
                    li.style.textDecoration = 'line-through';
                    li.style.color = 'red';
                } else { 
                    li.style.textDecoration = 'none';
                    li.style.color = 'black'; 
                }
            }
        } 
    });
}

buttIncopmleted.onclick  = () => {
    // Clear;
    ul.innerHTML = '';
    todos.forEach(item => {
        if (item.completed == false) {
            const li =  document.createElement('li');
            li.innerHTML = item.title;
            ul.prepend(li);
            document.body.append(ul);
            li.onclick = () => {
                count++;
                if (count % 2) {
                    li.style.textDecoration = 'line-through';
                    li.style.color = 'red';
                } else { 
                    li.style.textDecoration = 'none';
                    li.style.color = 'black'; 
                }
            }
        }
    });
}

buttClear.onclick = () => {
    // Clear;
    ul.innerHTML = '';
}
