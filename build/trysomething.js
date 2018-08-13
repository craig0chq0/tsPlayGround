"use strict";
var sec1 = 0; //声明秒
var sec01 = 0; //0.1秒
var sec001 = 0; //0.01秒
var ti = null;
function timing(sec1, sec01, sec001) {
    sec001 += 1;
    if (sec001 >= 10) {
        sec001 = 0;
        sec01 += 1;
    }
    if (sec01 >= 10) {
        sec01 = 0;
        sec1 += 1;
    }
    return sec1 + ":" + sec01 + sec001;
}
//开始计时
function start() {
    ti = setInterval(timing(sec1, sec01, sec001), 10);
}
//暂停计时
function stopTime() {
    if (ti == null)
        return;
    clearInterval(ti);
}
//重置
function reSet() {
    if (ti == null)
        return;
    clearInterval(ti);
    sec1 = 0;
    sec01 = 0;
    sec001 = 0;
    return sec1 + ":" + sec01 + sec001;
}
// function FD(firfood: string[]) {
//     let foodIndex = Math.random() * firfood.length | 0;
//     let secfood: string[] = [];
//     for (let i = 0; i < firfood.length; ++i) {
//         if (i !== foodIndex) {
//             secfood.push(firfood[i]);
//         }
//     }
//     return {foodList: secfood,food: firfood[foodIndex]};
// }
// let foodList: string[] = ["面", "炒饭", "盖浇饭", "黄焖鸡", "炒面", "麻辣烫", "凉皮"];
// for (let i = 1; i < 8; i++) {
//     console.log(`今天的菜谱是: `);
//     console.log(foodList);
//     let back = FD(foodList);
//     foodList = back.foodList;
//     let food = back.food;
//     console.log(`第${i}天的午饭是 ${food}`);
// }
/**设置一个总列表 */
var FDlist = ["a", "b", "c"];
/**从列表中随机选出一个值并将剩下的元素形成新的列表 */
function choose(list) {
    var ind = Math.random() * list.length | 0;
    var food = list[ind];
    var newlist = [];
    for (var i_1 = 0; i_1 < list.length; ++i_1) {
        if (list[i_1] !== food) {
            newlist.push(list[i_1]);
        }
    }
    //返回多个值时,返回一个对象
    return { food: list[ind], list: newlist };
}
for (var i_2 = 0; i_2 < 3; ++i_2) {
    console.log("\u4ECA\u5929\u7684\u83DC\u5355\u662F");
    console.log(FDlist);
    //每调用一次函数都会执行一次函数,所以可以使用下列方法保存函数的值,以避免重复执行函数
    //当return返回多个值时，,需要通过对象值的属性访问
    var ret = choose(FDlist);
    FDlist = ret.list;
    var food = ret.food;
    console.log("\u4ECA\u5929\u5348\u996D\u5403" + food);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5c29tZXRoaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHJ5c29tZXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJLElBQUksR0FBVyxDQUFDLENBQUMsQ0FBQSxLQUFLO0FBQzFCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07QUFDNUIsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUEsT0FBTztBQUM5QixJQUFJLEVBQUUsR0FBa0IsSUFBSSxDQUFDO0FBQzdCLGdCQUFnQixJQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7SUFDdkQsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUNaLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUNkLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7UUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsQ0FBQztLQUNiO0lBQ0QsT0FBVSxJQUFJLFNBQUksS0FBSyxHQUFHLE1BQVEsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsTUFBTTtBQUNOO0lBRUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsTUFBTTtBQUNOO0lBQ0ksSUFBSSxFQUFFLElBQUksSUFBSTtRQUFFLE9BQU87SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxJQUFJO0FBQ0o7SUFDSSxJQUFJLEVBQUUsSUFBSSxJQUFJO1FBQUUsT0FBTztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE9BQVUsSUFBSSxTQUFJLEtBQUssR0FBRyxNQUFRLENBQUM7QUFDdkMsQ0FBQztBQVFELG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsa0NBQWtDO0FBQ2xDLGlEQUFpRDtBQUNqRCxpQ0FBaUM7QUFDakMsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixRQUFRO0FBQ1IsMkRBQTJEO0FBQzNELElBQUk7QUFFSix5RUFBeUU7QUFFekUsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIseUNBQXlDO0FBQ3pDLElBQUk7QUFLSixhQUFhO0FBQ2IsSUFBSSxNQUFNLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXZDLDhCQUE4QjtBQUM5QixnQkFBZ0IsSUFBYztJQUMxQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUMzQixLQUFLLElBQUksR0FBQyxHQUFHLENBQUMsRUFBRSxHQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUMsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN4QjtLQUNKO0lBQ0QsZUFBZTtJQUNmLE9BQU8sRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FBQztBQUN6QyxDQUFDO0FBQ0QsS0FBSyxJQUFJLEdBQUMsR0FBQyxDQUFDLEVBQUMsR0FBQyxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsRUFBQztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFRLENBQUMsQ0FBQztJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLDRDQUE0QztJQUM1Qyw2QkFBNkI7SUFDN0IsSUFBSSxHQUFHLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sR0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLElBQUksSUFBSSxHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBUSxJQUFNLENBQUMsQ0FBQztDQUMzQiJ9