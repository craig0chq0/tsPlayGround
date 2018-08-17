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
var component = /** @class */ (function () {
    function component() {
    }
    ;
    return component;
}());
var concreteComponent = /** @class */ (function (_super) {
    __extends(concreteComponent, _super);
    function concreteComponent() {
        return _super.call(this) || this;
    }
    concreteComponent.prototype.operation = function () {
        console.log("具体对象的操作");
    };
    return concreteComponent;
}(component));
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super.call(this) || this;
    }
    Decorator.prototype.setcomponet = function (Component) {
        this.Component = Component;
    };
    Decorator.prototype.operation = function () {
        if (this.Component !== null) {
            this.Component.operation();
        }
    };
    return Decorator;
}(component));
var concreteDecoratorA = /** @class */ (function (_super) {
    __extends(concreteDecoratorA, _super);
    function concreteDecoratorA() {
        return _super.call(this) || this;
    }
    return concreteDecoratorA;
}(Decorator));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5emh1YW5nc2hpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHJ5emh1YW5nc2hpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFDSTtJQUFnQixDQUFDO0lBQUEsQ0FBQztJQUV0QixnQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBQ0Q7SUFBZ0MscUNBQVM7SUFDckM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxxQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBZ0MsU0FBUyxHQU94QztBQUNEO0lBQWlDLDZCQUFTO0lBQ3RDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRU8sK0JBQVcsR0FBbkIsVUFBb0IsU0FBbUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUcsSUFBSSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBaUMsU0FBUyxHQWF6QztBQUNEO0lBQWlDLHNDQUFTO0lBQ3RDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBS0wseUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBaUMsU0FBUyxHQVF6QyJ9