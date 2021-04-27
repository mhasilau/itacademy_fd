// const div1 = document.createElement('div');
// div1.innerHTML = 'hello';
// div1.setAttribute('clicked', false);
// div1.getAttribute('clicked');
// console.log(typeof div1.getAttribute('clicked'));
// document.body.append(div1);


// const div2 = document.createElement('div');
// div2.innerHTML = 'world';
// // div1.append(div2); //вложение
// div1.before(div2);
// // div1.after(div2);

// setTimeout ( () => div2.className = 'redblock', 2000);
// setTimeout ( () => div2.remove(), 5000);




// let i = 0;
// let sec = 0;
// let min = 0;
// let hour = 0;

// let div = document.createElement('div');
// div.innerHTML = '00:00:00';
// document.body.append(div);

// setInterval(() => {
//     sec = i;
//     i++
//     if (i > 59) {
//         i = 0;
//         min++;

//         if (min > 59) {
//             min = 0;
//             hour++;

//             if (hour = 24) {
//                 sec = 0;
//                 min = 0;
//                 hour = 0;
//             }
//         }
//     }
    
//     hour < 10 ? hour1 = `0${hour}` : hour1 = hour;
//     min < 10 ? min1 = `0${min}` : min1 = min;
//     sec < 10 ? sec1 = `0${sec}` : sec1 = sec;

//     div.innerHTML = `${hour1}:${min1}:${sec1}`;
//     console.log(`${hour1}:${min1}:${sec1}`);
// }, 1000);

// let sec1 = document.createElement('p');
// sec1.innerHTML = '';
// document.body.append(sec1);
// setTimeout(() => {
//     setInterval(() => {

//         sec1.innerHTML = i;
//         i++
        
//     }, 1000);
// }, 2000);

    


// const div = document.createElement('div');
// document.body.prepend(div);
// div.innerHTML = 'hello';
// let i = 0;
// div.onclick = () => {
//     i++;
//     if (i % 2) {
//         div.className ='redblock';
//     } else div.classList.remove('redblock');
// }


    // for (let i = 0; i < 10; i++) {
    //     const div =  document.createElement('div');
    //     div.innerHTML = `div-${i}`;
    //     document.body.append(div);
    //     div.onclick = () => {
    //         const isClicked = div.getAttribute('clicked');
    //         if (!isClicked) {
    //             div.setAttribute('clicked', true);
    //             div.className ='redblock';

    //         } else {
    //             div.removeAttribute('clicked');
    //             div.classList.remove('redblock');
    //         }
    //     }
    // }

// for (let i = 0; i < 10; i++) {
//     const div =  document.createElement('div');
//     div.innerHTML = `div-${i}`;
//     document.body.append(div);
//     div.onclick = () => {
//         div.remove();
//     }
// }

const ul =  document.createElement('ul');
let count = 0;
for (let i = 1; i <= 10; i++) {
    const li =  document.createElement('li');
    const butt = document.createElement('button');
    butt.innerHTML = 'click';
    li.innerHTML = `toDo-${i}`;
    document.body.append(ul);
    ul.prepend(li);
    li.append(butt);

    // ul.onclick = () => {
    //         const isClicked = ul.getAttribute('clicked');
    //         if (!isClicked) {
    //             ul.setAttribute('clicked', true);
    //             ul.className ='redblock';

    //         } else {
    //             ul.removeAttribute('clicked');
    //             ul.classList.remove('redblock');
    //         }
    //     }

    li.onclick = () => {
        count++;
        if (count % 2) {
            li.style.textDecoration = 'line-through';
        } else li.style.textDecoration = 'none';
    }

    butt.onclick = () => {
        li.remove();
    }

}

