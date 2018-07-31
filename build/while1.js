"use strict";
// 实现函数 输入整数 a 和 b, 如果 a + b 大于 100, 则返回两输之差，否则返回两数之和\
function rr(a, b) {
    var dif = 0;
    var sum = 0;
    var x = 0;
    if (a + b > 100) {
        dif = a - b;
        x = dif;
    }
    else {
        sum = a + b;
        x = sum;
    }
    return x;
}
console.log("值为 " + rr(50, 69));
// 实现函数 输入一个年份 判断是否是闰年
function year(x) {
    if (x % 4 === 0 && x % 100 !== 0 || x % 400 === 0) {
        return x;
    }
}
console.log(year(2000) + "是闰年");
// 标准体重 男士体重=身高-100+-3 女士体重=身高-110+-3 实现函数 输入相关参数 判断是否是标准体重
function weight(wei, hei, sex) {
    if (sex === 1) {
        var Z = void 0;
        var x1 = 0;
        var x2 = 0;
        x1 = hei - 100 + 3;
        x2 = hei - 100 - 3;
        if (wei > x2 && wei < x1) {
            Z = "符合";
        }
        else {
            Z = "不符合";
        }
        return Z;
    }
    else if (sex === 0) {
        var Z = void 0;
        var x1 = 0;
        var x2 = 0;
        x1 = hei - 110 + 3;
        x2 = hei - 110 - 3;
        if (wei > x2 && wei < x1) {
            Z = "符合";
        }
        else {
            Z = "不符合";
        }
        return Z;
    }
}
console.log("这位女士体重" + weight(55, 165, 0) + "标准体重");
console.log("这位男士体重" + weight(67, 175, 1) + "标准体重");
// 一个游戏一共50关,前20关是每一关1分,21-30关每一关是10分,31-40关,每一关是20分,41-49关,每一关是30分,50关,是100分 
// 输入你现在闯到的关卡数,获取总分数
// 
function score(a) {
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sco = 0;
    if (a < 21) {
        sum1 = a;
        sco = sum1;
    }
    else if (a > 20 && a < 31) {
        sum2 = 20 + (a - 20) * 10;
        sco = sum2;
    }
    else if (a > 30 && a < 41) {
        sum3 = 120 + (a - 30) * 20;
        sco = sum3;
    }
    else if (a > 40 && a < 50) {
        sum4 = 320 + (a - 40) * 30;
        sco = sum4;
    }
    else if (a >= 50) {
        sum5 = 720;
        sco = sum5;
    }
    return sco;
}
console.log(score(26));
// 找出元素 item 在给定数组 arr 中的位置 如果数组中存在 item ，则返回元素在数组中的位置，否则返回 -1
var arr1 = [0, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9];
function find(x, arr) {
    // 1
    // let sit: number = -1;
    // for (let i = 0; i < arr.length; ++i) {
    //     if (sit !== -1) continue;
    //     if (x === arr[i]) {
    //         sit = i;
    //     }
    // }
    // return sit;
    // 2
    for (var i_1 = 0; i_1 < arr.length; ++i_1) {
        if (x === arr[i_1]) {
            return i_1;
        }
    }
    return -1;
}
console.log(find(2, arr1));
// 移除数组 arr 中所有值与 item 相等的元素。不要直接修改数组 arr, 结果返回新的数组
var arr2 = ["a", "b", "c", "d", "e"];
function del(x, arr) {
    var returner = [];
    for (var i_2 = 0; i_2 < arr.length; ++i_2) {
        if (x !== arr[i_2]) {
            returner.push(arr[i_2]);
        }
    }
    return returner;
}
console.log("new: " + del("a", arr2));
console.log("old: " + arr2);
// 移除数组 arr 中所有值与 item 相等的元素。直接修改数组 arr, 并返回结果
function change(x, arr) {
    for (var i_3 = 0; i_3 < arr.length; ++i_3) {
        if (x === arr[i_3]) {
            arr.splice(i_3, 1);
        }
    }
    return arr;
}
console.log("new: " + change("a", arr2));
// 在数组 arr 末尾添加元素 item，不要直接修改数组 arr 结果返回新的数组
var arr3 = ["one", "two", "three", "four"];
function add1(arr, item) {
    var itemmm = [item];
    var returner2 = arr.concat(itemmm);
    return returner2;
}
console.log("new3: " + add1(arr3, "x"));
console.log("old3: " + arr3);
// 删除数组 arr 末尾最后一个元素，不要直接修改数组 arr 结果返回新的数组
function del1(arr) {
    var i = arr.length - 1;
    var cut = arr.slice(0, i);
    return cut;
}
console.log("new4: " + del1(arr3));
console.log("old4: " + arr3);
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
function add2(arr, item) {
    var arr1 = [item];
    var returner2 = arr1.concat(arr);
    return returner2;
}
console.log("new3: " + add2(arr3, "d"));
console.log("old3: " + arr3);
// 统计数组 arr 中值等于 item 的元素出现的次数
function time(item, arr) {
    // 1
    // let ret: number[] = [];
    // for (let i = 0; i < arr.length; ++i) {
    //     if (item === arr[i]) {
    //         ret.push(arr[i]);
    //     }
    // }
    // let x=ret.length;
    // return x;
    // 2
    var ret = 0;
    for (var i_4 = 0; i_4 < arr.length; ++i_4) {
        if (item === arr[i_4]) {
            ret++;
        }
    }
    return ret;
}
console.log("length " + time(2, arr1));
// 找出数组 arr 中重复出现过的元素
function check(arr) {
    var returner = [];
    arr.sort();
    for (var i_5 = 0; i_5 < arr.length; ++i_5) {
        if (arr[i_5] === arr[i_5 + 1] && returner.indexOf(arr[i_5]) === -1) {
            returner.push(arr[i_5]);
        }
    }
    return returner;
}
console.log(arr1);
console.log(check(arr1));
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function sd(arr) {
    var ret2 = [];
    var x = 0;
    for (var i_6 = 0; i_6 < arr.length; ++i_6) {
        var x_1 = arr[i_6] * arr[i_6];
        ret2.push(x_1);
    }
    return ret2;
}
console.log(arr1);
console.log(sd(arr1));
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function sit2(arr, item) {
    var ret3 = [];
    for (var i_7 = 0; i_7 < arr.length; ++i_7) {
        if (item === arr[i_7]) {
            ret3.push(i_7);
        }
    }
    return ret3;
}
console.log(arr1);
console.log(sit2(arr1, 4));
// 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2、如果 num 能被 3 整除，返回字符串 fizz
// 3、如果 num 能被 5 整除，返回字符串 buzz
// 4、如果参数为空或者不是 Number 类型，返回 false
// 5、其余情况，返回参数 num
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    else if (num % 3 === 0) {
        return "fizz";
    }
    else if (num % 5 === 0) {
        return "buzz";
    }
    else if (num === null || typeof num !== "number") {
        return "false";
    }
    else {
        return num;
    }
}
console.log(fizzBuzz("asd"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpbGUxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2hpbGUxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzREFBc0Q7QUFDdEQsWUFBWSxDQUFTLEVBQUUsQ0FBUztJQUM1QixJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQTtJQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2IsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1g7U0FDSTtRQUNELEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLHNCQUFzQjtBQUN0QixjQUFjLENBQVM7SUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUMvQyxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0wsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBRWhDLDJEQUEyRDtBQUMzRCxnQkFBZ0IsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ2pELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLElBQUksQ0FBQyxTQUFRLENBQUM7UUFDZCxJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7UUFDbkIsSUFBSSxFQUFFLEdBQVcs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