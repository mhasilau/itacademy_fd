// task 6

// let i = 0;
// let j = 0;
// let lines = 6;
// let point1 = "*";
// let point2 = " ";

// for (  i=0; i <=10; i++) {
//     if ( i >= j )
//     console.log("*");
//     for ( j=0; j<=6; j++) {
//         if ( i < j )
//         console.log("*");
//     }
// }
    
// let lines = 5;
// let sym1 = "*";
// let sym2 = " ";

// for(let curLine = 1; curLine <= lines; curLine++){  
//     let colSym1 = 2 * curLine - 1;
//     let strSym1="", strSym2="";
//    for(let i = 0; i < colSym1; i++){		
//      strSym1 += sym1;		
//    }
//    let colSym2 = lines - curLine;
//    strSym2 = "";
//    for(let i = 0; i < colSym2; i++){
//    	strSym2 += sym2
//    }
//   console.log(strSym2 + strSym1)
// }

var i = 0,
  j = 0;
// Желаемое количество строк
var max = 5;
var space = "",
  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}