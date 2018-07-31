class Greeter {
    greeting: string = ""
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}
let greeter = new Greeter("World");
console.log(greeter.greet());

function identity<T>(arg: T) {
    return arg;

}
const num = "JJ";
console.log(identity(num));

//
function identity1<T>(arg: T) {
    return arg;
}
let myidentity: <T>(arg: T) => T = identity1
let myidentity1: { <T>(arg: T): T } = identity1


//
interface ide<T> {
    (arg: T): T
}
function ide1<T>(arg: T): T {
    return arg;
}
let myide: ide<string> = ide1;

//
interface aasd {
    length: number;
}
function sda<T extends aasd>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(sda("asdafasd sgds fdf asd sfdsf a asdfa"));

//
// function sss(obj: T, key: K) {
//     return obj[key];
// }
// let x = { a: 1, b, c, d, e };
// sss(x,"a");
//


//
// class Animal {
//     constructor(private name: string) { }
//     move(distanceInMeters: number) {
//         console.log(`${this.name}moved${distanceInMeters}`)
//     }
// }
// let dog = new Animal("doge");
// console.log(dog.move);

//readonly为只读属性无法直接更改值,但是我们可以通过构造器给他重新赋值
class octopus {
    readonly name: string;
    readonly numberOfLegs: number = 2;
    constructor(theName: string, theNum: number) {
        this.name = theName;
        this.numberOfLegs = theNum;
    }
}
let dad = new octopus("hhh", 5);
console.log(dad.name);
console.log(dad.numberOfLegs);



//
let passcode = "correct passworld";
class Employee {
    private _fullname: string = "";
    get fullname(): string {
        return this._fullname;
    }
    set fullname(newName: string) {
        if (passcode && passcode === "correct passworld") {
            this._fullname = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullname = "LJJ";
if (employee.fullname) {
    console.log(employee.fullname);
}

