"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//在类中，分为两种状态一种是静态，一种是成员
//静态是指类的本身，而成员则是指类的实例
var aaa = /** @class */ (function () {
    //在实例化类时，类必须有构造函数
    //构造函数中可以对类进行初始化操作
    function aaa(yyy) {
        this.bbb = 0;
        this.bbb = yyy;
    }
    //类的静态函数中this指向类的本身
    //静态属性和静态函数在针对类的本身
    aaa.inita = function (num) {
        this.aaa = num;
    };
    //类的成员函数中this指向类的实例
    //成员属性和成员函数只能在实例中使用
    aaa.prototype.initb = function (num) {
        this.bbb = num;
    };
    aaa.aaa = 0;
    return aaa;
}());
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
var uuu = /** @class */ (function (_super) {
    __extends(uuu, _super);
    function uuu() {
        var _this = _super.call(this, 88) || this;
        _this.bbb;
        return _this;
    }
    uuu.yyy = function () {
        _super.inita.call(this, 1);
    };
    uuu.prototype.initb = function () {
        _super.prototype.initb.call(this, 777);
        ++this.bbb;
        return this.bbb;
    };
    uuu.ooo = 999;
    return uuu;
}(aaa));
var a3 = new uuu();
console.log(a3.initb());
uuu.yyy();
console.log(aaa.aaa);
var jjj = 0;
{
    jjj = 1;
}
console.log(jjj);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoienVveW9uZ3l1LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4venVveW9uZ3l1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtJQWNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBWSxHQUFXO1FBYnZCLFFBQUcsR0FBVyxDQUFDLENBQUE7UUFjWCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBZEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNYLFNBQUssR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQUssR0FBTCxVQUFNLEdBQVc7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBWE0sT0FBRyxHQUFXLENBQUMsQ0FBQTtJQWtCMUIsVUFBQztDQUFBLEFBcEJELElBb0JDO0FBRUQsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVix3QkFBd0I7QUFFeEIsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBRXZCLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsZ0NBQWdDO0FBRWhDLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Ysd0JBQXdCO0FBQ3hCLFVBQVU7QUFDViwwQ0FBMEM7QUFFMUM7SUFBa0IsdUJBQUc7SUFLakI7UUFBQSxZQUNJLGtCQUFNLEVBQUUsQ0FBQyxTQUVaO1FBREcsS0FBSSxDQUFDLEdBQUcsQ0FBQzs7SUFDYixDQUFDO0lBTk0sT0FBRyxHQUFWO1FBQ0ksT0FBTSxLQUFLLFlBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQU1ELG1CQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFlBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFiTSxPQUFHLEdBQVcsR0FBRyxDQUFBO0lBYzVCLFVBQUM7Q0FBQSxBQWZELENBQWtCLEdBQUcsR0FlcEI7QUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFeEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRVo7SUFDSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ1g7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDIn0=