//************ task 1
// arr = [6, 5, 16, 84, 56, 46, 0, 4, -5, 34];

// function compareNumbers(array) {
//     const sortArr = array.sort( (curr, next) => {
//         return curr - next; //не понимаю как раотает "под капотом"
//     });
//     console.log(sortArr);
// }
// compareNumbers(arr);

//************ task 2

// arr = [6, NaN, 16, false, 56, null, true, 0, '', -5, undefined];

// function filterFalse(array) {
//     const filterArr = array.filter( ( item, i, array) => { //пока пишу чтоб лучше понимать
//         return item == false ? null : item;
//     });
//     console.log(filterArr);
// }

// filterFalse(arr);

//************ task 3


// function propertyValue(params) {
    
// }

// propertyValue(array, key);

//************ task 4
let srtArr = ['JavaScript', '—', 'мультипарадигменный', 'язык', 'программирования'];
function srtArrLength(array) {
    let arrayLength = array.reduce( (acc, item, i, array) => {
        return acc + item.length;
    });
    console.log(arrayLength);
}
srtArrLength(srtArr)


//************ task 5
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const newNumb = [];
// function currentSums(numb) { //my function
//     numb.reduce( (acc, item, i, numb) => {
//         newNumb.push(acc);
//         return acc + item; 
//     });
//     console.log(newNumb);
// }

// function currentSums(numb) { //debag with internet
//     let sum = numb.reduce( (acc, item, i, numb) => {
//         newNumb.push(acc);
//         return acc + item; 
//     });
//     newNumb.push(sum);
//     console.log(newNumb);
// }

// currentSums(numbers);

//************ task 6
// let srtArr = ['JavaScript', '—', 'мультипарадигменный', 'язык', 'программирования'];
// function srtArrLength(array) {
//     let arrayLength = array.map( item => {
//         return item.length;
//     });
//     console.log(arrayLength);
// }
// srtArrLength(srtArr)


//************ task 7
// let inpArr = [];
// const addBtn = document.getElementById('addBtn');
// const viewBtn = document.getElementById('viewBtn');
// const clearArr = document.getElementById('clearArr');
    
// addBtn.onclick = function() {
//     inpArr.push(document.getElementById('inpEl').value);
//     console.log(inpEl);
//     document.getElementById('inpEl').value = '';
// }

// viewBtn.onclick = function() {
//     sortArr(inpArr);
//     document.getElementById('outArr').innerHTML = inpArr;
//     console.log(inpArr);
// }

// function sortArr() {
//     const sortArr = inpArr.sort( (curr, next) => {
//         return curr - next; //не понимаю как работает "под капотом"
//     });
//     console.log(sortArr);
// }

// clearArr.onclick = function() {
//     inpArr = [];
//     document.getElementById('outArr').innerHTML = inpArr;
// }
