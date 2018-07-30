// 接口

// 声明一个名为 people的接口 具有属性: name age 可选属性: job 其中 name 和 job 是字符串类型 age 是数字类型
interface people {
    name: string;
    age: number;
    job?: string;
}
// 将这个接口加上一个只读属性 father 类型为字符串
interface people {
    name: string;
    age: number;
    job?: string;
    readonly father: string;
}
// 实现一个满足此接口的变量,即属性为此接口，即内容与接口形式一致
let LJJ: people = {
    name: "ljj",
    age: 3,
    father: "god"
}
// 声明一个函数类型的接口 参数为 age 类型为 people 返回值为数字类型
interface functionpeople {
    (age: people): number
}
// 实现一个满足此接口的函数变量 返回值为age的值
//变量类型为接口类型
let ageNumb: functionpeople;
ageNumb = function (ljj: people) {
    return ljj.age
}
// 声明一个可索引接口 namebook 此接口的所有属性都满足 people 接口，且属性名都为字符串
interface namebook {
    [MMM: string]: people
}

// 实现一个变量满足上一条的接口
//相当于多个people接口形式的内容
let someone: namebook;
someone = {
    aaa: {
        name: "ljj",
        age: 3,
        father: "ooo",
        job: "worker"
    },
    bbb: {
        name: "ljj222",
        age: 5,
        father: "47487"
    }
};
// 实现一个类 满足 people 接口， 并且添加一个对象方法 getAge 返回的是 age 的值
// 上类中添加一个静态属性 home 类型为字符串
//implements--即为类添加接口
//ststic即添加静态属性
//添加返回值时注意返回值属于哪个类
class hunman implements people {
    static home: string
    static getHome() {
        return hunman.home;
    }
    name: string = "ssa";
    age: number = 1;
    father: string = "asd";
}

// 上类中添加一个静态方法 返回值为 home 的值
// 实现一个新的接口 chinese，继承自 people 接口 并添加一个属性 homeCity
interface chinese extends people{
    homecity:string;
}
//接口Chinese中的属性
// chinese.name
// chinese.age
// chinese.father
// chinese.job?
// chinese.homecity