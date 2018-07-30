"use strict";
// 声明一个数字类型的值
var a;
// 声明一个字符串类型的值
var b;
// 声明一个布尔类型的值
var c;
// 用两种方法声明一个字符串类型的数组
var d;
var e;
// 声明一个元组 第一个元素是数字 后两个是字符串
var f;
// 声明一个任意类型的枚举
var letter;
(function (letter) {
    letter[letter["a"] = 0] = "a";
    letter[letter["b"] = 1] = "b";
    letter[letter["c"] = 2] = "c";
    letter[letter["d"] = 3] = "d";
})(letter || (letter = {}));
var g;
// 声明一个any类型的变量，并赋值为 8，然后声明一个变量， 值为上面的变量的值减 2
var h = 8;
var i = h - 2;
