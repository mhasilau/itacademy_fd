const toDoArr = [];

const inp =  document.createElement('input');
inp.innerHTML = '';
document.body.append(inp);
const butt =  document.createElement('button');
butt.innerHTML = 'Add';
document.body.append(butt);


function bgImg(){
    style.backgroundImage = "url('https://i.stack.imgur.com/h8Blj.png')";
}


butt.onclick = () => {
    const ul =  document.createElement('ul');
    const li =  document.createElement('li');
    const butt1 = document.createElement('button');
    // butt1.style.backgroundImage = "url('https://i.stack.imgur.com/h8Blj.png')";
    // butt1.type = 'image';
    // butt1.className = 'bgImg';
    // butt1.src = 'https://pngicon.ru/file/uploads/128_16_2.png';
    butt1.innerHTML = 'Del';
    butt1.setAttribute = 'bgImg';
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
        });
        console.log(toDoArr);
    }
    inp.value = '';
    
}
