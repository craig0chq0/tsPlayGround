// 实现函数 输入整数 a 和 b, 如果 a + b 大于 100, 则返回两输之差，否则返回两数之和\
function rr(a: number, b: number) {
    let dif: number = 0;
    let sum: number = 0;
    let x: number = 0
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
function year(x: number) {
    if (x % 4 === 0 && x % 100 !== 0 || x % 400 === 0) {
        return x;
    }
}
console.log(year(2000) + "是闰年");

// 标准体重 男士体重=身高-100+-3 女士体重=身高-110+-3 实现函数 输入相关参数 判断是否是标准体重
function weight(wei: number, hei: number, sex: number) {
    if (sex === 1) {
        let Z: string;
        let x1: number = 0;
        let x2: number = 0;
        x1 = hei - 100 + 3;
        x2 = hei - 100 - 3;
        if (wei > x2 && wei < x1) {
            Z = "符合"
        }
        else {
            Z = "不符合"
        }
        return Z
    }
    else if (sex === 0) {
        let Z: string;
        let x1: number = 0;
        let x2: number = 0;
        x1 = hei - 110 + 3;
        x2 = hei - 110 - 3;
        if (wei > x2 && wei < x1) {
            Z = "符合"
        }
        else {
            Z = "不符合"
        }
        return Z
    }

}
console.log("这位女士体重" + weight(55, 165, 0) + "标准体重");
console.log("这位男士体重" + weight(67, 175, 1) + "标准体重");
// 一个游戏一共50关,前20关是每一关1分,21-30关每一关是10分,31-40关,每一关是20分,41-49关,每一关是30分,50关,是100分 
// 输入你现在闯到的关卡数,获取总分数
// 
function score(a: number) {
    let sum1: number = 0;
    let sum2: number = 0;
    let sum3: number = 0;
    let sum4: number = 0;
    let sum5: number = 0;
    let sco: number = 0;
    if (a < 21) {
        sum1 = a;
        sco = sum1
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
let arr1 = [0, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9];
function find(x: number, arr: number[]) {
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
    for (let i = 0; i < arr.length; ++i) {
        if (x === arr[i]) {
            return i
        }
    }
    return -1;
}
console.log(find(2, arr1));

// 移除数组 arr 中所有值与 item 相等的元素。不要直接修改数组 arr, 结果返回新的数组
let arr2: string[] = ["a", "b", "c", "d", "e"]
function del(x: string, arr: string[]) {
    let returner: string[] = [];
    for (let i = 0; i < arr.length; ++i) {
        if (x !== arr[i]) {
            returner.push(arr[i]);
        }
    }
    return returner;
}
console.log("new: " + del("a", arr2));
console.log("old: " + arr2);


// 移除数组 arr 中所有值与 item 相等的元素。直接修改数组 arr, 并返回结果
function change(x: string, arr: string[]) {
    for (let i = 0; i < arr.length; ++i) {
        if (x === arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log("new: " + change("a", arr2));

// 在数组 arr 末尾添加元素 item，不要直接修改数组 arr 结果返回新的数组
let arr3: string[] = ["one", "two", "three", "four"]
function add1(arr: string[]) {
    let item: string[] = ["x"];
    let returner2 = arr.concat(item)
    return returner2;
}
console.log("new3: " + add1(arr3));
console.log("old3: " + arr3);


// 删除数组 arr 末尾最后一个元素，不要直接修改数组 arr 结果返回新的数组
function del1(arr: string[]) {
    let i = arr.length - 1;
    let cut = arr.slice(0, i);
    return cut;
}
console.log("new4: " + del1(arr3));
console.log("old4: " + arr3);

// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

function add2(arr: string[], item: string) {
    let arr1 = [item];
    let returner2 = arr1.concat(arr);
    return returner2;
}
console.log("new3: " + add2(arr3, "d"));
console.log("old3: " + arr3);

// 统计数组 arr 中值等于 item 的元素出现的次数
function time(item: number, arr: number[]) {
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
    let ret: number = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (item === arr[i]) {
            ret++;
        }
    }
    return ret;
}
console.log("length " + time(2, arr1));

// 找出数组 arr 中重复出现过的元素
function check(arr: number[]) {
    let returner: number[] = [];
    arr.sort();
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === arr[i + 1] && returner.indexOf(arr[i]) === -1) {
            returner.push(arr[i]);
        }
    }
    return returner;
}
console.log(arr1);
console.log(check(arr1));

// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function sd(arr: number[]) {
    let ret2: number[] = [];
    let x: number = 0;
    for (let i = 0; i < arr.length; ++i) {
        let x = arr[i] * arr[i];
        ret2.push(x);
    }
    return ret2;
}
console.log(arr1);
console.log(sd(arr1));
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function sit2(arr: number[], item: number) {
    let ret3: number[] = [];
    for (let i = 0; i < arr.length; ++i) {
        if (item === arr[i]) {
            ret3.push(i);

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
function fizzBuzz(num: any) {
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