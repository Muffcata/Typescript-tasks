var currentStatus = "success";
var worker = { name: "Kate", employeeId: 23 };
var user = { name: "John", age: 30 };
console.log(user);
//Generics
function identity(value) {
    return value;
}
var result = identity(42);
//Funkcja zwraca tylko number
function getNumberFirstElement(arr) {
    return arr[0];
}
//Teraz dowolny typ
function getEachFirstElement(arr) {
    return arr[0];
}
// Tablice z generykami
function reverseArray(arr) {
    return arr.reverse();
}
var number = reverseArray([1, 2, 3]);
var strings = reverseArray(["a", "b", "c"]);
console.log(number);
var stringBox = { content: "Typescript" };
var numberBox = { content: 42 };
//Klasy z generykami
var DataHolder = /** @class */ (function () {
    function DataHolder(initialValue) {
        this.value = initialValue;
    }
    DataHolder.prototype.getValue = function () {
        return this.value;
    };
    DataHolder.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    return DataHolder;
}());
var holder = new DataHolder("Hello!");
holder.setValue("World");
console.log(holder.getValue());
//Ograniczenia generyków(extends)
function logLength(value) {
    console.log(value.length);
}
logLength("Hello");
logLength([1, 2, 3]);
var car = { brand: "Mercedes", seats: 4, isElectric: true };
var bike = { type: "road", gearCount: 4 };
console.log("Samoch\u00F3d: ".concat("brand" in car ? "marka: ".concat(car.brand, ", siedzenia: ").concat(car.seats, ", elektryczny: ").concat(car.isElectric) : "Nie samochód"));
console.log("Rower: ".concat("type" in bike ? "typ: ".concat(bike.type, ", ilo\u015B\u0107 bieg\u00F3w: ").concat(bike.gearCount) : "Nie rower"));
function reverseValue(pair) {
    return {
        firstValue: pair.secondValue,
        secondValue: pair.firstValue,
    };
}
// Ćwiczenie 2: Generyki
// Stwórz funkcję, która porównuje wartości tego samego typu i zwróć wiekszą wartość
function getGreaterValue(value1, value2) {
    return value1 > value2 ? value1 : value2; //Porównujemy o zwracamy większą
}
//Ćwiczenie 3: Stwórz funkcję generyczną, która:
//Przyjmuje tablicę wartości dowolnego typu T.
//Zwraca największy element w tablicy (np. dla liczb – największą liczbę, dla łańcuchów – alfabetycznie ostatni element).
function getMaxValue(values) {
    if (values.length === 0) {
        throw new Error("Tablica jest pusta");
    }
    var maxValue = values[0];
    for (var i = 1; i < values.length; i++) {
        if (values[i] > maxValue) {
            maxValue = values[i];
        }
    }
    return maxValue;
}
//Ćwiczenie 4: Stwórz funkcję generyczną, która:
//Przyjmuje tablicę wartości dowolnego typu T.
//Zwraca zarówno największy, jak i najmniejszy element w tablicy jako obiekt
function getMinMaxValue(values) {
    if (values.length === 0) {
        throw new Error("Tablica jest pusta");
    }
    var max = values[0];
    var min = values[0];
    for (var i = 1; i < values.length; i++) {
        if (values[i] < min) {
            min = values[i];
        }
        if (values[i] > max) {
            max = values[i];
        }
    }
    return { min: min, max: max };
}
