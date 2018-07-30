// 安装 nodejs
// 安装 nodejs 的 一个模块 typescript

// 循环资料
// http://www.runoob.com/js/js-loop-for.html
// http://www.runoob.com/js/js-loop-while.html
// http://www.runoob.com/js/js-break.html

// 实现一个函数，传入任意长度的数字数组，返回数组中所有元素相加的和
function getSum(arr: number[]) {
    let sum: number = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}
let arr0 = [0, 1, 2, 3, 4, 5];
console.log("题目1的答案为: " + getSum(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中除最后一个元素之外的和
function getsum1(arr: number[]) {
    let sum1: number = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
        sum1 += arr[i];
    }
    return sum1;
}
console.log("answer is " + getsum1(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中所有第奇数位元素的和
function getsum2(arr: number[]) {
    let sum2: number = 0;
    for (let i = 1; i < arr.length; i = i + 2) {
        sum2 += arr[i];
    }
    return sum2;
}
console.log("answer2 is " + getsum2(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中所有偶数的和
function getsum3(arr: number[]) {
    let sum3: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum3 += arr[i];
        }
    }
    return sum3;
}
console.log("answer3 is " + getsum3(arr0));
// 构造一个数组，并作为参数传入上面函数，打印返回值
