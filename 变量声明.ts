// 声明一个数组 名 arr 元素的值按顺序为 0 1 2 3 4 5 6 7 8
let arr :number[]=[0,1,2,3,4,5,6,7,8];
// 用 const 声明一个对象 名 obj 对象的属性和值分别为 first 0 second 2 third 3 forth 5 fifth 4
// enum rank{first=0,secong=2,third=3,forth=5,fifth=4}
// const obj=rank;
const obj={
    first:0,second:2,third:3,forth:5,fifth:4
}
// 交换 obj 对象的 forth和fifth的值
obj.fifth=5;
obj.forth=4;
// 解构声明两个变量 first second ，值为 arr 的 第4，5个元素
let [first,second]=[4,5]

// 写一个函数 解构获取 obj 对象的 third 和 forth 属性 并返回他们的和
function sum([third,forth]:[3,4]){
    return third+forth
}