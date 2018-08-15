"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = "";
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
console.log(greeter.greet());
function identity(arg) {
    return arg;
}
var num = "JJ";
console.log(identity(num));
//
function identity1(arg) {
    return arg;
}
var myidentity = identity1;
var myidentity1 = identity1;
function ide1(arg) {
    return arg;
}
var myide = ide1;
function sda(arg) {
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
var octopus = /** @class */ (function () {
    function octopus(theName, theNum) {
        this.numberOfLegs = 2;
        this.name = theName;
        this.numberOfLegs = theNum;
    }
    return octopus;
}());
var dad = new octopus("hhh", 5);
console.log(dad.name);
console.log(dad.numberOfLegs);
//
var passcode = "correct passworld";
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullname = "";
    }
    Object.defineProperty(Employee.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            if (passcode && passcode === "correct passworld") {
                this._fullname = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullname = "LJJ";
if (employee.fullname) {
    console.log(employee.fullname);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGlheGllLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4veGlheGllLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUVJLGlCQUFZLE9BQWU7UUFEM0IsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUVqQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0QsdUJBQUssR0FBTDtRQUNJLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUNELElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFN0Isa0JBQXFCLEdBQU07SUFDdkIsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDO0FBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFM0IsRUFBRTtBQUNGLG1CQUFzQixHQUFNO0lBQ3hCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELElBQUksVUFBVSxHQUFxQixTQUFTLENBQUE7QUFDNUMsSUFBSSxXQUFXLEdBQXVCLFNBQVMsQ0FBQTtBQU8vQyxjQUFpQixHQUFNO0lBQ25CLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELElBQUksS0FBSyxHQUFnQixJQUFJLENBQUM7QUFNOUIsYUFBNkIsR0FBTTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7QUFFeEQsRUFBRTtBQUNGLGlDQUFpQztBQUNqQyx1QkFBdUI7QUFDdkIsSUFBSTtBQUNKLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2QsRUFBRTtBQUdGLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsNENBQTRDO0FBQzVDLHVDQUF1QztBQUN2Qyw4REFBOEQ7QUFDOUQsUUFBUTtBQUNSLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBRXpCLHdDQUF3QztBQUN4QztJQUdJLGlCQUFZLE9BQWUsRUFBRSxNQUFjO1FBRGxDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFJOUIsRUFBRTtBQUNGLElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDO0FBQ25DO0lBQUE7UUFDWSxjQUFTLEdBQVcsRUFBRSxDQUFDO0lBWW5DLENBQUM7SUFYRyxzQkFBSSw4QkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFhLE9BQWU7WUFDeEIsSUFBSSxRQUFRLElBQUksUUFBUSxLQUFLLG1CQUFtQixFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzthQUM1QjtpQkFDSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7YUFDMUQ7UUFDTCxDQUFDOzs7T0FSQTtJQVNMLGVBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQUNELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ2xDIn0=