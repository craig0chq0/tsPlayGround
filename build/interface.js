"use strict";
// 接口
// 实现一个满足此接口的变量,即属性为此接口，即内容与接口形式一致
var LJJ = {
    name: "ljj",
    age: 3,
    father: "god"
};
// 实现一个满足此接口的函数变量 返回值为age的值
//变量类型为接口
var ageNumb;
ageNumb = function (ljj) {
    return ljj.age;
};
// 实现一个变量满足上一条的接口
//相当于多个people接口形式的内容
var someone;
someone = {
    aaa: {
        name: "ljj",
        age: 3,
        father: "ooo",
        job: "worker"
    },
    bbb: {
        name: "ljj222",
        age: 5,
        father: "47487"
    }
};
// 实现一个类 满足 people 接口， 并且添加一个对象方法 getAge 返回的是 age 的值
// 上类中添加一个静态属性 home 类型为字符串
//implements--即为类添加接口
//ststic即添加静态属性
//添加返回值时注意返回值属于哪个类
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
var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(myFunction);
function myFunction(item, index) {
    console.log("index[" + index + "]" + item);
}
var myname;
var myage;
function ljj(name, age) {
    myname = name;
    myage = age;
    return "myname is " + myname + ",and I am " + myage + " years old";
}
console.log(ljj("Li", 3));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxLQUFLO0FBZUwsa0NBQWtDO0FBQ2xDLElBQUksR0FBRyxHQUFXO0lBQ2QsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUE7QUFLRCwyQkFBMkI7QUFDM0IsU0FBUztBQUNULElBQUksT0FBdUIsQ0FBQztBQUM1QixPQUFPLEdBQUcsVUFBVSxHQUFXO0lBQzNCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFNRCxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLElBQUksT0FBaUIsQ0FBQztBQUN0QixPQUFPLEdBQUc7SUFDTixHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsUUFBUTtLQUNoQjtJQUNELEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLEVBQUUsT0FBTztLQUNsQjtDQUNKLENBQUM7QUFDRixvREFBb0Q7QUFDcEQsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCO0lBQUE7UUFLSSxTQUFJLEdBQVcsS0FBSyxDQUFDO1FBQ3JCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFXLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBTlUsY0FBTyxHQUFkO1FBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFJTCxhQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFPRCxlQUFlO0FBQ2YsZUFBZTtBQUNmLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixJQUFJLE9BQU8sR0FBVSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0Isb0JBQW9CLElBQVcsRUFBRSxLQUFZO0lBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUNELElBQUksTUFBYSxDQUFDO0FBQ2xCLElBQUksS0FBWSxDQUFDO0FBQ2pCLGFBQWEsSUFBVyxFQUFDLEdBQVU7SUFDL0IsTUFBTSxHQUFDLElBQUksQ0FBQztJQUNaLEtBQUssR0FBQyxHQUFHLENBQUM7SUFDVixPQUFPLGVBQWEsTUFBTSxrQkFBYSxLQUFLLGVBQVksQ0FBQztBQUM3RCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==