var message = "Hello, Typescript";
console.log(message);
var age = 25;
var isStudent = true;
var hobbies = ["reading", "coding"];
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
var user = { name: "Marta", age: 30 };
console.log(user);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise"));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.speak();
