function narcissistic(value) {
    let sum = 0;
    let arrX = value.split('');
    console.log(arrX);
    for (let i = 0; i < arrX.length; i++) {
        sum += Math.pow(arrX[i], arrX.length);
    }
    console.log(sum);
    return sum == value || arrX.length === 1;
  }
console.log(narcissistic('153'));

