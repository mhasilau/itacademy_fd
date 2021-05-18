const toDoArr = [];
let count = 0;
if (window.location.pathname === '/twits.html') {
    const inp =  document.getElementById('userText');
    inp.innerHTML = '';
    document.body.append(inp);
    const butt =  document.createElement('button');
    butt.innerHTML = 'Add';
    document.body.append(butt);
    
    butt.onclick = () => {
        const ul =  document.createElement('ul');
        const li =  document.createElement('li');
        const butt1 = document.createElement('img');
    
    
        butt1.src = '../pic/trash.png'
        butt1.classList.add('trash');
    
        toDoArr.push(inp.value);
        toDoArr.forEach( (el, i) => {
            li.innerHTML = toDoArr[i];
        });
        document.body.append(ul);
        ul.prepend(li);
        li.append(butt1);
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
        
    }

}
