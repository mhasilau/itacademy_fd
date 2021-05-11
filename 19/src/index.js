import '../style/style.scss';
import { playMusic}  from '../js/func';

const toDoArr = [];
let count = 0;

const inp =  document.createElement('input');
inp.innerHTML = '';
document.body.append(inp);
const butt =  document.createElement('button');
butt.innerHTML = 'Add';
document.body.append(butt);

const music = document.getElementById('music');

butt.onclick = () => {
    const ul =  document.createElement('ul');
    const li =  document.createElement('li');
    const butt1 = document.createElement('img');


    butt1.src = '../pic/trash.png';
    butt1.classList.add('trash');

    toDoArr.push(inp.value);
    toDoArr.forEach( (el, i) => {
        li.innerHTML = toDoArr[i];
    });
    ul.prepend(li);
    li.append(butt1);
    document.body.append(ul);
    console.log(toDoArr);
    
    butt1.onclick = () => {
        toDoArr.forEach( (el, i) => {
            // toDoArr.splice(i, 1);
            li.remove();
            playMusic();

        });
        console.log(toDoArr);
    }
    inp.value = '';

    li.onclick = () => {
        count++;
        if (count % 2) {
            li.style.textDecoration = 'line-through';
        } else li.style.textDecoration = 'none';
    }
    
}
