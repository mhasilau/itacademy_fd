import '../style/style.scss';
// var moment = require('moment');
// import moment from 'moment';

// let num = (Math.floor(Math.random() * 10));
// console.log(num);
// const inp = document.getElementById('inp');
// const butt = document.getElementById('answer')
// let i = 0;


// butt.onclick = () => {
//     i++;
//     console.log(inp.value);
//     num == inp.value ? console.log('yes') : console.log('no');
//     inp.value = '';
// }


// const date = new Date();
// console.log(date);
// console.log(date.getDate());

// console.log(moment().format('LL'));
// console.log(moment().format('LL'));

const ul = document.createElement('ul');
const todosArr = [];

let todos;

const fetchTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => todos = json)
}

const getTodos = async () => {
    await fetchTodos();
    // console.log('TODOS', todos);
    todo();

}

console.log(getTodos());

const todo = () => {
    todos.forEach(item => {
        // console.log(item.title);
        const li =  document.createElement('li');
        li.innerHTML = item.title;
        ul.prepend(li);
        document.body.append(ul);
    });
}