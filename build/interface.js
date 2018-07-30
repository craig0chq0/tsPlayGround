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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxLQUFLO0FBZUwsZUFBZTtBQUNmLElBQUksR0FBRyxHQUFXO0lBQ2QsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUE7QUFLRCwyQkFBMkI7QUFDM0IsSUFBSSxPQUF1QixDQUFDO0FBQzVCLE9BQU8sR0FBRyxVQUFVLEdBQVc7SUFDM0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQU1ELGlCQUFpQjtBQUNqQixJQUFJLE9BQWlCLENBQUM7QUFDdEIsT0FBTyxHQUFHO0lBQ04sR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLEtBQUs7UUFDWCxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLFFBQVE7S0FDaEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLE9BQU87S0FDbEI7Q0FDSixDQUFDO0FBQ0Ysb0RBQW9EO0FBQ3BELDBCQUEwQjtBQUMxQjtJQUFBO1FBS0ksU0FBSSxHQUFXLEtBQUssQ0FBQztRQUNyQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQU5VLGNBQU8sR0FBZDtRQUNJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBSUwsYUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBT0QsZUFBZTtBQUNmLGVBQWU7QUFDZixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixtQkFBbUIifQ==