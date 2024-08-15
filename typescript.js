var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// How to write a "string" in Typescript
var firstName = "Taiwo";
// How to write a "number" in Typescript
var accountNumber = 23456789;
// How to write a "boolean" in Typescript
var isMarried = true;
// How to write a "null" in Typescript
var dept = null;
// How to write a "undefined" in Typescript
var accountBalance = undefined;
// How to write a "any" in Typescript
var girFriend = 27;
// How to write an "Arays" in Typescript
var num = [1, 2, 3, 4, 5];
var names = ["lee", "cm", "DML"];
var num2 = [];
var names2 = [];
// How to write a "Tuple" in Typescript
var person = ["Francis", 7898789, false];
var person2 = ["Queepe", 8264339, true];
// How to create an "Enum" i Typescript
var paymentMethod;
(function (paymentMethod) {
    paymentMethod[paymentMethod["cashapp"] = 0] = "cashapp";
    paymentMethod[paymentMethod["zelle"] = 1] = "zelle";
    paymentMethod[paymentMethod["venmo"] = 2] = "venmo";
    paymentMethod[paymentMethod["paypal"] = 3] = "paypal";
})(paymentMethod || (paymentMethod = {}));
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Ok"] = 200] = "Ok";
    HttpStatus[HttpStatus["NOTFOUND"] = 404] = "NOTFOUND";
    HttpStatus[HttpStatus["SERVERERROR"] = 500] = "SERVERERROR";
})(HttpStatus || (HttpStatus = {}));
var myStatus = HttpStatus.Ok;
console.log(myStatus);
// How to create a "Function" in typescript
var profit = function (cp, sp) {
    return sp - cp;
};
console.log(profit(6, 8));
// Do this when you want to write "console.log"
var greet = function (name) {
    console.log("Hello + \"Stephen\" + name");
};
// Do this when you want to write "return"
var greet2 = function (name) {
    return "Hello + \"Stephen\" + name";
};
console.log(greet2);
// How to create a "Union" in typescript
var value;
value = "lee";
value = 25;
value = null;
value = true;
var phone = 8080898765;
var food = "Garri";
// How to create a "Class"  in typescript
var Animal = /** @class */ (function () {
    function Animal(name, legs, fur) {
        this.name = name;
        this.legs = legs;
        this.fur = fur;
    }
    Animal.prototype.sound = function () {
        console.log("Animal Sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, legs, fur, breed) {
        var _this = _super.call(this, name, legs, fur) || this;
        _this.breed = breed;
        return _this;
    }
    // Polimorphism
    Dog.prototype.sound = function () {
        console.log("Barks");
    };
    return Dog;
}(Animal));
