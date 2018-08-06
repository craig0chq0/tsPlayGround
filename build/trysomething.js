"use strict";
// let sec1: number = 0;//声明秒
// let sec01: number = 0;//0.1秒
// let sec001: number = 0;//0.01秒
// let ti: number | null = null;
// function timing(sec1: number, sec01: number, sec001: number) {
//     sec001 += 1;
//     if (sec001 >= 10) {
//         sec001 = 0;
//         sec01 += 1;
//     }
//     if (sec01 >= 10) {
//         sec01 = 0;
//         sec1 += 1;
//     }
//     return `${sec1}:${sec01}${sec001}`;
// }
// //开始计时
// function start() {
//     ti = setInterval(timing(sec1, sec01, sec001), 10);
// }
// //暂停计时
// function stop() {
//     if (ti == null) return;
//     clearInterval(ti);
// }
// //重置
// function reSet() {
//     if (ti == null) return;
//     clearInterval(ti);
//     sec1 = 0; sec01 = 0; sec001 = 0;
//     return `${sec1}:${sec01}${sec001}`;
// }
// let allfood:string[]=[];
var firfood = ["1", "2", "3"];
var secfood = [];
var hh = "";
secfood = secFood(firfood, hh);
/**第一天的选择 */
function FD() {
    hh = firfood[Math.random() * firfood.length | 0];
    return hh;
}
function secFood(arr, item) {
    var nwearr = [];
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] != item) {
            nwearr.push(arr[i_1]);
        }
    }
    return nwearr;
}
/**后一天的选择 */
function SECD() {
    return secfood[Math.random() * secfood.length | 0];
}
console.log(firfood);
console.log(FD());
console.log(secfood);
console.log(SECD());
console.log(hh);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5c29tZXRoaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHJ5c29tZXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsaUVBQWlFO0FBQ2pFLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsUUFBUTtBQUNSLDBDQUEwQztBQUMxQyxJQUFJO0FBQ0osU0FBUztBQUNULHFCQUFxQjtBQUVyQix5REFBeUQ7QUFDekQsSUFBSTtBQUNKLFNBQVM7QUFDVCxvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixJQUFJO0FBQ0osT0FBTztBQUNQLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLHVDQUF1QztBQUN2QywwQ0FBMEM7QUFDMUMsSUFBSTtBQU1KLDJCQUEyQjtBQUMzQixJQUFJLE9BQU8sR0FBVSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBSSxPQUFPLEdBQVUsRUFBRSxDQUFDO0FBQ3hCLElBQUksRUFBRSxHQUFRLEVBQUUsQ0FBQztBQUNqQixPQUFPLEdBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQztBQUM1QixZQUFZO0FBRVo7SUFDSyxFQUFFLEdBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sRUFBRSxDQUFDO0FBQ1gsQ0FBQztBQUNKLGlCQUFpQixHQUFZLEVBQUMsSUFBVztJQUNyQyxJQUFJLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDZCxLQUFJLElBQUssR0FBQyxHQUFDLENBQUMsRUFBQyxHQUFDLEdBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFDLEVBQUUsRUFBQztRQUMxQixJQUFHLEdBQUcsQ0FBQyxHQUFDLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsWUFBWTtBQUNaO0lBQ0ksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMifQ==