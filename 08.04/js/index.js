const str = 'Annak';
let y = false;

function palindromCheck(pal) {
    pal = pal.toLowerCase().split('');
    console.log(pal);
    let pal2 = pal.reverse();
    console.log(pal2);

    for (let i = 0; i < pal.length; i++) {
        if (!(pal[i] == pal2[i])) {
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
