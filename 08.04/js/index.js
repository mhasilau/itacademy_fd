const str = 'kAnnak';
let y = false;

function palindromCheck(pal) {
    let pal3 = pal.toLowerCase().split('');
    let pal2 = pal.toLowerCase().split('').reverse();
    console.log(pal);
    console.log(pal2);
    console.log(pal3);


    for (let i = 0; i < pal3.length; i++) {
        if (!(pal3[i] == pal2[i])) {
            break;
        } else y = true;
        
    }
    y === true ? console.log('yes') : console.log('no');
       
}
palindromCheck(str)





let arr = ['e', 'u', 'i', 'a', 'o', 'y'];
let hell = 'hello world';
let hell2 = hell.toLowerCase().split('');
let x = 0;

for (let i = 0; i < hell2.length; i++) {
    for (let j = 0; j < hell2.length; j++) {
        if (hell[i] == arr[j]) {
            x++;
        }
    }
}

console.log(x);
