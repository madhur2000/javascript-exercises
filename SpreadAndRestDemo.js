console.log("Hello, Madhur!");

// function multiplyThenSum(a, b, ...args){
//     let ans = 0;
//     ans = a*b;
//     for (let index = 0; index < args.length; index++) {
//         ans += args[index];
//     }
//     return ans;
// }
function multiplyThenSum(a, b, ...args){
    let product = a * b;
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    }
    return [product, sum];
}

// console.log(multiplyThenSum(3, 5, 8, 9, 1, 2));
// console.log(multiplyThenSum(3));
console.log(multiplyThenSum(3, 5, 2, 4, 6, 8));