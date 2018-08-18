// 用递归 来求 5 的阶乘
// n! = n * (n-1)!

// 定义一个函数，用于求 n 的阶乘
function digui(n: number): number {
    if (n === 1) {
        return 1
    }
    return n * digui(n - 1)
}



function func(n: number): number {
    if (n == 0 || n == 1) {
        return 1;
    }
    return func(n - 1) + func(n - 2);
}

var a123 = func(4);
console.log(a123);
function fibonacci(n: number): number {
    if (n <= 0) {
        return 0
    }
    if (n <= 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)

}
console.log(fibonacci(5))


function stair(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    return stair(n - 1) + stair(n - 2) + stair(n - 3);
}
console.log(stair(5));


function stair1(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return stair1(n - 1) + stair1(n - 2);
}
console.log(stair1(5));


function gys(a: number, b: number): number {
    let x = Math.abs(a - b);
    let y = Math.min(a, b);
    if (a === b) return a
    return gys(x, y)
}
console.log(gys(1, 3));


function hnt(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return hnt(n - 1) + hnt(n - 1) + 1;
}
console.log(hnt(3));


// function erfen(arr: number[]): number[] {
//     if (arr.length === 1) return arr;
//     let larr: number[] = [];
//     let rarr: number[] = [];
//     let len = Math.floor(Math.random() * arr.length / 2 + 1);
//     let baseNum = arr[len]
//     arr.forEach((num) => {
//         if (num < baseNum) {
//             larr.push(num)
//         }
//         else {
//             rarr.push(num);
//         }
//     })
//     return erfen(larr).concat(baseNum, erfen(rarr));
// }
// let arr111:number[]=[1, 5, 6,]
// console.log(erfen(arr111));


