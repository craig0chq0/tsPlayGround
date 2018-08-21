//在类中，分为两种状态一种是静态，一种是成员
//静态是指类的本身，而成员则是指类的实例
class aaa {

    static aaa: number = 0
    bbb: number = 0
    //类的静态函数中this指向类的本身
    //静态属性和静态函数在针对类的本身
    static inita(num: number) {
        this.aaa = num;
    }
    //类的成员函数中this指向类的实例
    //成员属性和成员函数只能在实例中使用
    initb(num: number) {
        this.bbb = num;
    }
    //在实例化类时，类必须有构造函数
    //构造函数中可以对类进行初始化操作
    constructor(yyy: number) {
        this.bbb = yyy;
    }

}

// aaa.inita(7890);
// // 7890
// console.log(aaa.aaa);

// let a0 = new aaa(1);
// // 1111
// a0.initb(1111);
// console.log(a0.bbb);

// let a1 = new aaa(2);
// // 2222
// a1.initb(2222);
// console.log(a1.bbb);
// // 3333
// console.log(a0.bbb + a1.bbb);

// aaa.inita(3333);
// // 3333
// console.log(aaa.aaa);
// // 6666
// console.log(a0.bbb + a1.bbb + aaa.aaa);

class uuu extends aaa {
    static ooo: number = 999
    static yyy() {
        //this指针的指向会随着调用他的内容进行改变，也就是所谓指向调用它的东西
        //比如这里，虽然是进行父类的yyy函数但由于是子类uuu调用的，所以this指针指向的不是父类，而是子类uuu
        super.inita(1);
    }
    constructor() {
        super(88);
        this.bbb;
    }

    initb() {
        super.initb(777);
        ++this.bbb;
        return this.bbb;
    }
}

let a3 = new uuu();
console.log(a3.initb());

uuu.yyy();
console.log(aaa.aaa);
//对于作用域，子作用域可以取到父作用域内的属性，而父作用域无法取到子作用域的内容
let jjj = 0;
//且当子作用域取到父作用域内容后，对其改变后，父作用域的相应内容也会改变。。。因为本质上是一个内容
{
    let jjj = 1;
    {
        jjj;
    }
}

console.log(jjj);

//它们在功能上是没有区别的，都是改变this的指向，它们的区别主要是在于方法的实现形式和参数传递上的不同
//函数.call(对象,arg1,arg2....)会执行函数
//函数.apply(对象，[arg1,arg2,...])会执行函数
//函数.bind(对象,arg1,arg2,....)并不会执行函数
function show() {
    //@ts-ignore
    console.log(this.name);
}
let person = {
    name: "zhangsan",
    age: 3
}

show.apply(person, ["1"]);
show.call(person, "0");
show.bind(person,"1111");
show.bind(person,"1111")();


// function add(a:number,b:number){ 
//     return a + b;
//  }
//  var newFoo = add.bind(3,4);
// let tt:Function;
// tt('123456');
// console.log(123456)


//一个神奇的存在
 //@ts-ignore
console.log(++[[]][+[]]+[+[]])