"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cash = /** @class */ (function () {
    function cash() {
    }
    return cash;
}());
var normalcash = /** @class */ (function (_super) {
    __extends(normalcash, _super);
    function normalcash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    normalcash.prototype.acceptcash = function (cash) {
        return cash;
    };
    return normalcash;
}(cash));
var discountcash = /** @class */ (function (_super) {
    __extends(discountcash, _super);
    function discountcash(dis) {
        var _this = _super.call(this) || this;
        _this.discount = 1;
        _this.discount = dis;
        return _this;
    }
    discountcash.prototype.acceptcash = function (cash) {
        return cash * this.discount;
    };
    return discountcash;
}(cash));
var returncash = /** @class */ (function (_super) {
    __extends(returncash, _super);
    function returncash(condition, return1) {
        var _this = _super.call(this) || this;
        _this.moneycondition = 1;
        _this.moneyreturn = 1;
        _this.moneycondition = condition;
        _this.moneyreturn = return1;
        return _this;
    }
    returncash.prototype.acceptcash = function (cash) {
        if (cash >= this.moneycondition) {
            var result_1 = cash - Math.floor(cash / this.moneycondition) * this.moneyreturn;
            return result_1;
        }
        else {
            return cash;
        }
    };
    return returncash;
}(cash));
var cashFac = /** @class */ (function () {
    function cashFac() {
    }
    cashFac.caeratFav = function (type) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        var cs = null;
        switch (type) {
            case "normalcash":
                cs = new normalcash();
                Array.bind;
                break;
            case "discountcash":
                var dis1 = new discountcash(arg[0]);
                cs = dis1;
                break;
            case "returncash":
                var ret1 = new returncash(arg[0], arg[1]);
                cs = ret1;
                break;
            default:
                throw "不存在这个策略";
        }
        return cs;
    };
    return cashFac;
}());
var aaaa = cashFac.caeratFav("discountcash", 0.3);
console.log(aaaa.acceptcash(200));
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5Y2VsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cnljZWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBQ0k7SUFBZ0IsQ0FBQztJQUVyQixXQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFFRDtJQUF5Qiw4QkFBSTtJQUE3Qjs7SUFJQSxDQUFDO0lBSEcsK0JBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXlCLElBQUksR0FJNUI7QUFFRDtJQUEyQixnQ0FBSTtJQUUzQixzQkFBWSxHQUFXO1FBQXZCLFlBQ0ksaUJBQU8sU0FFVjtRQUpPLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7O0lBQ3hCLENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFWRCxDQUEyQixJQUFJLEdBVTlCO0FBRUQ7SUFBeUIsOEJBQUk7SUFDekIsb0JBQVksU0FBaUIsRUFBRSxPQUFlO1FBQTlDLFlBQ0ksaUJBQU8sU0FHVjtRQUNPLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBSjVCLEtBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDOztJQUMvQixDQUFDO0lBS0QsK0JBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM3QixJQUFJLFFBQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDOUUsT0FBTyxRQUFNLENBQUM7U0FDakI7YUFDSTtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBbkJELENBQXlCLElBQUksR0FtQjVCO0FBRUQ7SUFBQTtJQXFCQSxDQUFDO0lBcEJVLGlCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFBRSxhQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsNEJBQWdCOztRQUMzQyxJQUFJLEVBQUUsR0FBUyxJQUFJLENBQUM7UUFDcEIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLFlBQVk7Z0JBQ2IsRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUE7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLElBQUksR0FBaUIsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLElBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ1YsTUFBTTtZQUNWO2dCQUNJLE1BQU0sU0FBUyxDQUFBO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFHRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVsQyxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLDREQUE0RDtBQUM1RCwyQ0FBMkM7QUFDM0MsbUVBQW1FO0FBQ25FLFFBQVE7QUFDUixJQUFJO0FBRUosK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxtQ0FBbUM7QUFDbkMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxRQUFRO0FBQ1IsSUFBSTtBQUVKLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsb0NBQW9DO0FBQ3BDLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsUUFBUTtBQUNSLElBQUk7QUFFSiwyQ0FBMkM7QUFDM0MscURBQXFEO0FBRXJELGNBQWM7QUFDZCxnQkFBZ0IifQ==