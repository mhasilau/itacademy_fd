// *****task 1*****
function doubleDot() {
   let num = innerHTML = document.getElementById('inp1').value;
   num = num.split('');
   for (let i = 0; i < num.length-1; i++) {
      if ((num[i] % 2) && (num[i+1] % 2)) {
         let time = num[i];
         num[i] = `${time}:`
      }
   }
   document.getElementById('out1').innerHTML = num.join('');
   num = '';
   document.getElementById('inp1').value = '';
}


// *****task 2*****
// const arr = ['df', '6g4', '5df', 6, 'b4', 'd', 'fs', 64, '2d', 'f3', 5, 7, 4, '3d', '5g', 4];
// const fElements = 7;
// let cutArr = [];
// function getFirst(array, n) {
//    for (let i = 0; i < n; i++) {
//       cutArr.push(array[i]);
//    }
//    console.log(cutArr);
// }
// getFirst(arr, fElements)


// *****task 3.1*****
// const arr = ['df', '6g4', '5df', 6, 'b4', 'd', 'fs', 64, '2d', 'f3', 5, 7, 4, '3d', '5g', 4];
// const fElements = 7;
// let cutArr = [];
// function getLast(array, n) {
//    array = array.reverse();
//    for (let i = 0; i < n; i++) {
//       cutArr.push(array[i]);
//    }
//    console.log(cutArr);
// }
// getLast(arr, fElements)


// *****task 3.1*****
// const arr = ['df', '6g4', '5df', 6, 'b4', 'd', 'fs', 64, '2d', 'f3', 5, 7, 4, '3d', '5g', 4];
// const fElements = 7;
// let cutArr = [];
// function getLast(array, n) {
//    for (let i = array.length-1; i > array.length-1-n; i--) {
//       cutArr.unshift(array[i]);
//    }
//    console.log(cutArr);
// }
// getLast(arr, fElements)


// *****task 4*****
// const arr1 = ['df','3d', '6g4', '5df', 6, 'b4', 4, 'fs', 64, false, 'f3', 5, 7, 4,  '3d','5g', 4];
// const arr2 = [65, 's', 4, false, 5, 's', 'g', 16, 'sd', false, 's', 'f6', 8, 'b', 4, 's', 6, 'g', 1];
// const arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3]; //456
// const arr2 = [4, 5, 6, 7, 8, 9, 4, 5, 6]; //789

// function concatUniqueArrays(array1, array2) {
//    unique(array1);
//    unique(array2);
//    let uniqueArray = array1.concat(array2);
//    console.log(uniqueArray);
// }

// function unique(array) {
//     let doubleArr = [];
//     for ( let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] == array[j] && i != j) {
//                 doubleArr.push(array[i])
//             }
//         }
//     }
//     for (let k = 0; k < array.length; k++) {
//         for (let n = 0; n < doubleArr.length; n++) {
//             if (array[k] == doubleArr[n]) {
//                 array.splice(k, 1);
//             }
//         }
//     }
// }

// concatUniqueArrays(arr1, arr2);


// *****task 5*****
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// function sumOfSquares(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       sum += Math.pow(arr[i], 2);
      
//    }
//    console.log(sum);
// }

// sumOfSquares(array);


// *****task 6*****
// typeOfSort = 'job';
// const personal = [
//     {
//        name:'Mikhail',
//        secondName: 'Hasilau', 
//        age: 29,
//        job: 'anykey'
//     }, 
//     {
//         name:'Valery',
//         secondName: 'Kotau', 
//         age: 29,
//         job: 'specialist'
//     }, 
//     {
//         name:'Olesya',
//         secondName: 'Hulevich', 
//         age: 42,
//         job: 'jurist'
//     },
//     {
//         name:'Hanna',
//         secondName: 'Zohareva', 
//         age: 32,
//         job: 'specialist'
//     },
//     {
//         name:'Tatiana',
//         secondName: 'Zhukova', 
//         age: 43,
//         job: 'nurse'
//     },
//     {
//         name:'Aleaksandr',
//         secondName: 'Puzan', 
//         age: 49,
//         job: 'doctor'
//     }
   
// ];
// console.table(personal);

// function sortArrayOfObjects(array) {
//     switch (typeOfSort) {
//         case 'name':
//             array.sort(function(a, b){
//                 let firstName = a.name.toLowerCase();
//                 let secondName = b.name.toLowerCase();
//                 if (firstName < secondName) {
//                     return -1;
//                 } else if (firstName > secondName) {
//                     return 1;
//                 } else return 0;
//             })
//             break;
//         case 'secondName':
//             array.sort(function(a, b){
//                 let firstSecondName = a.secondName.toLowerCase();
//                 let secondSecondName = b.secondName.toLowerCase();
//                 if (firstSecondName < secondSecondName) {
//                     return -1;
//                 } else if (firstSecondName > secondSecondName) {
//                     return 1;
//                 } else return 0;
//             })
//             break;
//         case 'age':
//             array.sort(function(a, b){
//                 let firstAge = a.age;
//                 let secondAge = b.age;
//                 if (firstAge < secondAge) {
//                     return -1;
//                 } else if (firstAge > secondAge) {
//                     return 1;
//                 } else return 0;
//             })
//             break;
//         case 'job':
//             array.sort(function(a, b){
//                 let firstJob = a.job.toLowerCase();
//                 let secondJob = b.job.toLowerCase();
//                 if (firstJob < secondJob) {
//                     return -1;
//                 } else if (firstJob > secondJob) {
//                     return 1;
//                 } else return 0;
//             })
//             break;
//     }

//     console.table(array);
// }

// sortArrayOfObjects(personal, typeOfSort);


// *****task 7*****
// const personal = [
//     {
//        name:'Mikhail',
//        secondName: 'Hasilau', 
//        age: 29,
//        job: 'anykey'
//     }, 
//     {
//         name:'Valery',
//         secondName: 'Kotau', 
//         age: 29,
//         job: 'specialist'
//     }, 
//     {
//         name:'Olesya',
//         secondName: 'Hulevich', 
//         age: 42,
//         job: 'jurist'
//     },
//     {
//         name:'Hanna',
//         secondName: 'Zohareva', 
//         age: 32,
//         job: 'specialist'
//     },
//     {
//         name:'Tatiana',
//         secondName: 'Zhukova', 
//         age: 43,
//         job: 'nurse'
//     },
//     {
//         name:'Aleaksandr',
//         secondName: 'Puzan', 
//         age: 49,
//         job: 'doctor'
//     }
   
// ];
// console.table(personal);

// function propertyValue(array, key) {
//     let valueAray = [];
//     for (let i = 0; i < array.length; i++) {
//         valueAray.push(array[i][key])
//     }
//     console.log(valueAray);
// }
// propertyValue(personal, 'secondName');
