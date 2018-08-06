
let sec1: number = 0;//声明秒
let sec01: number = 0;//0.1秒
let sec001: number = 0;//0.01秒
let ti: number | null = null;
function timing(sec1: number, sec01: number, sec001: number) {
    sec001 += 1;
    if (sec001 >= 10) {
        sec001 = 0;
        sec01 += 1;
    }
    if (sec01 >= 10) {
        sec01 = 0;
        sec1 += 1;
    }
    return `${sec1}:${sec01}${sec001}`;
}
//开始计时
function start() {

    ti = setInterval(timing(sec1, sec01, sec001), 10);
}
//暂停计时
function stop() {
    if (ti == null) return;
    clearInterval(ti);
}
//重置
function reSet() {
    if (ti == null) return;
    clearInterval(ti);
    sec1 = 0; sec01 = 0; sec001 = 0;
    return `${sec1}:${sec01}${sec001}`;
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
let FDlist: string[] = ["a", "b", "c"];

/**从列表中随机选出一个值并将剩下的元素形成新的列表 */
function choose(list: string[]) {
    let ind=Math.random() * list.length | 0;
    let food = list[ind];
    let newlist: string[] = [];
    for (let i = 0; i < list.length; ++i) {
        if (list[i] !== food) {
            newlist.push(list[i])
        }
    }
    //返回多个值时,返回一个对象
    return {food:list[ind],list:newlist};
}
for (let i=0;i<3;++i){
console.log(`今天的菜单是`);
console.log(FDlist);
//每调用一次函数都会执行一次函数,所以可以使用下列方法保存函数的值,以避免重复执行函数
//当return返回多个值时，,需要通过对象值的属性访问
let ret=choose(FDlist);
 FDlist=ret.list;
let food=ret.food;
console.log(`今天午饭吃${food}`);
}
