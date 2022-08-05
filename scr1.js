var a = [10, 12, 15, 16, 18, 20];
// odd number in arrow function
var aodd = () => {
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 === 0) {
            console.log(a[i])
        }
    }
    return a;
}
console.log(aodd());

//sum of all numbers arrows
var arrsum = () => {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {

        sum = sum + a[i];
    }
    return sum;
}

console.log(arrsum())

//prime arrow function
var pri = (n) => {
    if (n < 2)
        return `${n} is not a prime`
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime`
        }
    }
    return `${n} is a prime number`
}
console.log(pri(17));


//palindrome in array arrow function
var palindromeArray = (arr) => {

    let isPalindrome = true;


    for (let i = 0; i < arr.length / 2; i++) {


        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
console.log(palindromeArray([1, 2, 2, 1]));


// palidrome in anonymous  function
var palind = function pali(arr)
{

    let isPalindrome = true;


    for (let i = 0; i < arr.length / 2; i++) {


        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
console.log(palind([1,4,5,6]))

//convert string title caps arrow function
var title = (str) => {

    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
console.log(tit("wonderful day"))
 //rotate array arrow function
 var rot=((arr)=>{
    let last = arr.pop();
    arr.unshift(last);
    return arr;
})
console.log(rot([1,7,5,8,9,7]))