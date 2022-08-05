var a = [10, 12, 15, 16, 18, 20];
1.// print odd numbers anonymous function
const odd = function () {
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 === 0) {
            console.log(a[i])
        }
    }
    return a;
}
console.log(odd());

//tittle cap functions
var title = function tit(str)  {

    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
console.log(title("wonderful day"))

//sum of all numbers
const sum = function () {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {

        sum = sum + a[i];
    }
    return sum;
}
console.log(sum());

// prime number in anonomus 
var pri = function prime(n) {
    if (n < 2)
        return `${n} is not a prime`
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime`
        }
    }
    return `${n} is a prime number`
}
console.log(pri(9));

// convert string title caps anonymous function
var tit = function toTitleCase(str) {

    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
console.log(tit("happy world"))
//remove duplicate from an array arrow
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

//rotate array anonymous 
var rot=function rotateRight(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(rot([1,2,3,4,5]))





