"use strict";
// 声明一个数组 名 arr 元素的值按顺序为 0 1 2 3 4 5 6 7 8
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// 用 const 声明一个对象 名 obj 对象的属性和值分别为 first 0 second 2 third 3 forth 5 fifth 4
var obj = {
    first: 0, second: 2, third: 3, forth: 5, fifth: 4
};
// 交换 obj 对象的 forth和fifth的值
var tem = obj.forth;
obj.forth = obj.fifth;
obj.fifth = tem;
// 解构声明两个变量 first second ，值为 arr 的 第4，5个元素
var first = arr[4], second = arr[5]; //此处的arr就代表了{first: 0, second: 2, third: 3, forth: 5, fifth: 4},
// 写一个函数 解构获取 obj 对象的 third 和 forth 属性 并返回他们的和
var third = obj.third, forth = obj.forth;
//此处的obj特代表了{first: 0, second: 2, third: 3, forth: 5, fifth: 4}
function sum(_a) {
    var _b = _a === void 0 ? obj : _a, third = _b.third, forth = _b.forth;
    return third + forth;
}
//数组let= [, , , , first, second] = arr 中[, , , , first, second]对应着[, , , ,4,5],位置对应
//对象{ third, forth } = obj 中 obj即{first: 0, second: 2, third: 3, forth: 5, fifth: 4},third对应third;forth对应forth,民称对应
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsSUFBSSxHQUFHLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELDJFQUEyRTtBQUMzRSxJQUFNLEdBQUcsR0FBRztJQUNSLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDcEQsQ0FBQztBQUNGLDJCQUEyQjtBQUMzQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUN0QixHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQiwwQ0FBMEM7QUFDN0IsSUFBQSxjQUFLLEVBQUUsZUFBTSxDQUFRLENBQUEsZ0VBQWdFO0FBRWxHLDhDQUE4QztBQUN4QyxJQUFBLGlCQUFLLEVBQUUsaUJBQUssQ0FBUztBQUMzQiwrREFBK0Q7QUFDL0QsU0FBUyxHQUFHLENBQUMsRUFBc0I7UUFBdEIsNkJBQXNCLEVBQXBCLGdCQUFLLEVBQUUsZ0JBQUs7SUFDdkIsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLENBQUM7QUFDRCxtRkFBbUY7QUFDbkYsbUhBQW1IIn0=