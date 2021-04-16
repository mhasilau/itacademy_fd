function disemvowel(str) {
    const arr = str.toString().split('');
    const vowels  = ['e', 'u', 'i', 'a', 'o', 'E', 'U', 'I', 'A', 'O'];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arr[i] == vowels[j]) {
                str = arr.splice(i, 1)
            }
        }
    }
    console.log(arr.join(''));
    return str.join('');
    
}
disemvowel("No offense but,\nYour writing is among the worst I've ever read");