"use strict";
// 用递归 来求 5 的阶乘
// n! = n * (n-1)!
// 定义一个函数，用于求 n 的阶乘
function digui(n) {
    if (n === 1) {
        return 1;
    }
    return n * digui(n - 1);
}
function func(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return func(n - 1) + func(n - 2);
}
var a123 = func(4);
console.log(a123);
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
function stair(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    if (n === 3)
        return 4;
    return stair(n - 1) + stair(n - 2) + stair(n - 3);
}
console.log(stair(5));
function stair1(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    return stair1(n - 1) + stair1(n - 2);
}
console.log(stair1(5));
function gys(a, b) {
    var x = Math.abs(a - b);
    var y = Math.min(a, b);
    if (a === b)
        return a;
    return gys(x, y);
}
console.log(gys(1, 3));
function hnt(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return hnt(n - 1) + hnt(n - 1) + 1;
}
console.log(hnt(3));
// function erfen(arr: number[]): number[] {
//     if (arr.length === 1) return arr;
//     let larr: number[] = [];
//     let rarr: number[] = [];
//     let len = Math.floor(Math.random() * arr.length / 2 + 1);
//     let baseNum = arr[len]
//     arr.forEach((num) => {
//         if (num < baseNum) {
//             larr.push(num)
//         }
//         else {
//             rarr.push(num);
//         }
//     })
//     return erfen(larr).concat(baseNum, erfen(rarr));
// }
// let arr111:number[]=[1, 5, 6,]
// console.log(erfen(arr111));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlndWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kaWd1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZUFBZTtBQUNmLGtCQUFrQjtBQUVsQixtQkFBbUI7QUFDbkIsZUFBZSxDQUFTO0lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNULE9BQU8sQ0FBQyxDQUFBO0tBQ1g7SUFDRCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNCLENBQUM7QUFJRCxjQUFjLENBQVM7SUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixtQkFBbUIsQ0FBUztJQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQTtLQUNYO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtJQUNELE9BQU8sU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRTlDLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBR3pCLGVBQWUsQ0FBUztJQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUd0QixnQkFBZ0IsQ0FBUztJQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixPQUFPLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUd2QixhQUFhLENBQVMsRUFBRSxDQUFTO0lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDcEIsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBR3ZCLGFBQWEsQ0FBUztJQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUdwQiw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsZ0VBQWdFO0FBQ2hFLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixZQUFZO0FBQ1osU0FBUztBQUNULHVEQUF1RDtBQUN2RCxJQUFJO0FBQ0osaUNBQWlDO0FBQ2pDLDhCQUE4QiJ9