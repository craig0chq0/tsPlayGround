// 声明一个数字类型的值
let a :number;
// 声明一个字符串类型的值
let b :string;
// 声明一个布尔类型的值
let c :boolean;
// 用两种方法声明一个字符串类型的数组
let d :string[];
let e :Array<string>;
// 声明一个元组 第一个元素是数字 后两个是字符串
let f :[number,string,string];
// 声明一个任意类型的枚举
enum letter{a,b,c,d}
let g:letter
// 声明一个any类型的变量，并赋值为 8，然后声明一个变量， 值为上面的变量的值减 2
let h:any="abcdefgh"
let i:number=(<string>h).length-2