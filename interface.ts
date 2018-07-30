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
// 实现一个满足此接口的变量
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
let ageNumb: functionpeople;
ageNumb = function (ljj: people) {
    return ljj.age
}
// 声明一个可索引接口 namebook 此接口的所有属性都满足 people 接口，且属性名都为字符串
interface namebook {
    [MMM: number]: people
}

// 实现一个变量满足上一条的接口
let someone: namebook;
someone = {
    121: {
        name: "ljj",
        age: 3,
        father: "ooo",
        job: "worker"
    },
    212: {
        name: "ljj222",
        age: 5,
        father: "47487"
    }
};
// 实现一个类 满足 people 接口， 并且添加一个对象方法 getAge 返回的是 age 的值
// 上类中添加一个静态属性 home 类型为字符串
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
// chinese.name
// chinese.age
// chinese.father
// chinese.job?
// chinese.homecity