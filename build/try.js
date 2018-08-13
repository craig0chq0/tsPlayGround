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
var operate = /** @class */ (function () {
    function operate() {
        this.numA = 0;
        this.numB = 0;
    }
    ;
    operate.prototype.getresult = function () {
        var result = 0;
        return result;
    };
    return operate;
}());
var opeAdd = /** @class */ (function (_super) {
    __extends(opeAdd, _super);
    function opeAdd() {
        return _super.call(this) || this;
    }
    ;
    opeAdd.prototype.getresult = function () {
        var result = 0;
        result = this.numA + this.numB;
        return result;
    };
    return opeAdd;
}(operate));
var opeSub = /** @class */ (function (_super) {
    __extends(opeSub, _super);
    function opeSub() {
        return _super.call(this) || this;
    }
    ;
    opeSub.prototype.getresult = function () {
        var result = 0;
        result = this.numA - this.numB;
        return result;
    };
    return opeSub;
}(operate));
var opeMul = /** @class */ (function (_super) {
    __extends(opeMul, _super);
    function opeMul() {
        return _super.call(this) || this;
    }
    ;
    opeMul.prototype.getresult = function () {
        var result = 0;
        result = this.numA * this.numB;
        return result;
    };
    return opeMul;
}(operate));
var opeDiv = /** @class */ (function (_super) {
    __extends(opeDiv, _super);
    function opeDiv() {
        return _super.call(this) || this;
    }
    ;
    opeDiv.prototype.getresult = function () {
        var result = 0;
        if (this.numB !== 0) {
            result = this.numA / this.numB;
        }
        else {
            throw "除数不能为0";
        }
        return result;
    };
    return opeDiv;
}(operate));
var opeFactory = /** @class */ (function () {
    function opeFactory() {
    }
    opeFactory.creatFactory = function (oper) {
        var ope = null;
        switch (oper) {
            case "+":
                ope = new opeAdd();
                break;
            case "-":
                ope = new opeSub();
                break;
            case "*":
                ope = new opeMul();
                break;
            case "/":
                ope = new opeDiv();
                break;
        }
        return ope;
    };
    return opeFactory;
}());
var ope;
ope.numA = 1;
ope.numB = 2;
ope = opeFactory.creatFactory("+");
var result = ope.getresult();
console.log(result);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFDSTtRQUNBLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztJQUZELENBQUM7SUFBQSxDQUFDO0lBR2xCLDJCQUFTLEdBQVQ7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBQ0Q7SUFBcUIsMEJBQU87SUFDeEI7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFBQSxDQUFDO0lBQ0YsMEJBQVMsR0FBVDtRQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBcUIsT0FBTyxHQVMzQjtBQUNEO0lBQXFCLDBCQUFPO0lBQ3hCO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQUEsQ0FBQztJQUNGLDBCQUFTLEdBQVQ7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQVRELENBQXFCLE9BQU8sR0FTM0I7QUFDRDtJQUFxQiwwQkFBTztJQUN4QjtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFDRiwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFURCxDQUFxQixPQUFPLEdBUzNCO0FBQ0Q7SUFBcUIsMEJBQU87SUFDeEI7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFBQSxDQUFDO0lBQ0YsMEJBQVMsR0FBVDtRQUNJLElBQUksTUFBTSxHQUFXLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEM7YUFDSTtZQUNELE1BQU0sUUFBUSxDQUFBO1NBQ2pCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBcUIsT0FBTyxHQWUzQjtBQUNEO0lBQUE7SUFtQkEsQ0FBQztJQWxCVSx1QkFBWSxHQUFuQixVQUFvQixJQUFZO1FBQzVCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQztRQUN4QixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBQ0QsSUFBSSxHQUFZLENBQUE7QUFDaEIsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNiLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBIn0=