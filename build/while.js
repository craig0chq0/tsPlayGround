"use strict";
// 安装 nodejs
// 安装 nodejs 的 一个模块 typescript
// 循环资料
// http://www.runoob.com/js/js-loop-for.html
// http://www.runoob.com/js/js-loop-while.html
// http://www.runoob.com/js/js-break.html
// 实现一个函数，传入任意长度的数字数组，返回数组中所有元素相加的和
function getSum(arr) {
    var sum = 0;
    for (var i_1 = 0; i_1 < arr.length; ++i_1) {
        sum += arr[i_1];
    }
    return sum;
}
var arr0 = [0, 1, 2, 3, 4, 5];
console.log("题目1的答案为: " + getSum(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中除最后一个元素之外的和
function getsum1(arr) {
    var sum1 = 0;
    for (var i_2 = 0; i_2 < arr.length - 1; ++i_2) {
        sum1 += arr[i_2];
    }
    return sum1;
}
console.log("answer is " + getsum1(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中所有第奇数位元素的和
function getsum2(arr) {
    var sum2 = 0;
    for (var i_3 = 1; i_3 < arr.length; i_3 = i_3 + 2) {
        sum2 += arr[i_3];
    }
    return sum2;
}
console.log("answer2 is " + getsum2(arr0));
// 实现一个函数，传入任意长度的数字数组，返回数组中所有偶数的和
function getsum3(arr) {
    var sum3 = 0;
    for (var i_4 = 0; i_4 < arr.length; i_4++) {
        if (arr[i_4] % 2 == 0) {
            sum3 += arr[i_4];
        }
    }
    return sum3;
}
console.log("answer3 is " + getsum3(arr0));
// 构造一个数组，并作为参数传入上面函数，打印返回值
