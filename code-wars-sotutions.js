// Question 1
function solution(number) {
    if (number < 0){ // ignore any negative numbers
        return 0; 
    }
    let sum = 0; // initialize empty variable to store sum
    for (let i = 0; i < number; i++){ // iterate through all nums from 0 to number parameter
        if (i % 3 === 0 || i % 5 === 0){
            sum += i; // if number is a multiple of 3 or 5, add to sum
        }
    }
    return sum; 
}

// Question 2
function pigIt(str) {
    const words = str.split(' '); // create array with each individual word
    const newStr = words.map(word =>{
        if (word.match(/[\W]/g)) { // if punctuation, return normally
            return word;
        }
        return word.slice(1) + word[0] + 'ay'; // if not punctuation, remove first letter, add first letter to end and add 'ay'
    });
    return newStr.join(' '); // combine new words back into a string
}

// Question 3
function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--) { // iterate through array backwards
        if (arr[i] === 0) { // check for zeroes
            arr.splice(i, 1);
            arr.push(0); //if 0, remove from index and push 0 to end of array
        }
    }
    return arr;
}

// Question 4
function likes(names) {
    if (names.length == 0) {
        return "no one likes this"; // if nothing is in array
    }
    else if (names.length == 1) {
        return `${names[0]} likes this`; // if one name is in array, return first element
    }
    else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`; // if two names are in array, return both first and second elements
    }
    else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`; // if 3 names, return 1st, 2nd, and 3rd names
    }
    else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`; // if 4+ names, return 1st and 2nd names, then return the total length-2 since we already returned the first two
    }
}


// Question 5
function findUniq(arr) {
    return arr.find((diff) => arr.indexOf(diff) === arr.lastIndexOf(diff)); // use find to iterate through arr; check if diff occurs once, and if so, return it
}

// Question 6
function findOutlier(integers) {
    const odd = [];
    const even = []; // initialize empty arrays for even and odd numbers
    for (let num in integers) { // iterate through integers array
        if (integers[num] % 2 === 0) {
            even.push(integers[num]); // add even nums to even array, else add to odd array
        }
        else {
            odd.push(integers[num]);
        }
    }
    if (even.length === 1) { // check which array has length of 1: this is the outlier
        return even[0]; // return outlier if even
    }
    else {
        return odd[0]; // return outlier if odd
    }
}

// Question 7
function duplicateCount(text) {
    return text.toLowerCase().split('').sort().join('').match(/([^])\1+/g).length; //make all letters in the string lowercase. split the string into individual letters. sort the string to group letters, then join the string back into one word. use regex to check for multiple occurrences. return the length of the string's duplicate letters with regex
}
