// Ćwiczenie 1: Typy podstawowe | Zadanie: Stwórz kilka zmiennych z różnymi typami i wyświetl je w konsoli.
// Instrukcja: Utwórz zmienne: name jako string, age jako number, isLearning jako boolean.
// Wypisz ich wartości w konsoli.
var userName = "Marta";
var userAge = 34;
var isLearning = true;
console.log("To s\u0105 moje pierwsze warto\u015Bci: ".concat(userName, ", ").concat(userAge, ", ").concat(isLearning));
// Ćwiczenie 2: Tablice Zadanie: Stwórz tablicę, która przechowuje listę ulubionych kolorów.
// Instrukcja: Stwórz zmienną colors typu string[], Dodaj kilka kolorów, Wyświetl pierwszy kolor z tablicy.
var colors = ["rózowy", "zielony", "czarny"];
console.log("Pierwszy kolor z tablicy to: ".concat(colors[0]));
// Ćwiczenie 3: Funkcja z typami Zadanie: Napisz funkcję, która sumuje dwie liczby.
// Instrukcja: Stwórz funkcję add. Określ typy dla parametrów (np. a: number, b: number).Funkcja powinna zwracać number.
// Wywołaj funkcję i wyświetl wynik w konsoli.
function sumOfNum(a, b) {
    return a + b;
}
console.log(sumOfNum(1, 11));
;
var myCar = {
    brand: "Mercedes",
    year: 2020,
    electric: false
};
console.log(myCar);
// Ćwiczenie 5: Klasy Zadanie: Utwórz klasę Rectangle, która oblicza pole prostokąta.
// Instrukcja: Stwórz klasę Rectangle. Dodaj do niej pola: width i height (oba number). Stwórz metodę getArea, która zwraca pole prostokąta.
// Utwórz obiekt tej klasy i wyświetl wynik w konsoli.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 5);
console.log("Pole prostok\u0105ta to: ".concat(rectangle.getArea()));
