"use strict";
// 接口
// 实现一个满足此接口的变量
var LJJ = {
    name: "ljj",
    age: 3,
    father: "god"
};
// 实现一个满足此接口的函数变量 返回值为age的值
var ageNumb;
ageNumb = function (ljj) {
    return ljj.age;
};
// 实现一个变量满足上一条的接口
var someone;
someone = {
    121: {
        name: "ljj",
        age: 3,
        father: "ooo",
        job: "worker"
    },
    212: {
        name: "ljj222",
        age: 5,
        father: "47487"
    }
};
// 实现一个类 满足 people 接口， 并且添加一个对象方法 getAge 返回的是 age 的值
// 上类中添加一个静态属性 home 类型为字符串
var hunman = /** @class */ (function () {
    function hunman() {
        this.name = "ssa";
        this.age = 1;
        this.father = "asd";
    }
    hunman.getHome = function () {
        return hunman.home;
    };
    return hunman;
}());
//接口Chinese中的属性
// chinese.name
// chinese.age
// chinese.father
// chinese.job?
// chinese.homecity
