// Ćwiczenie 1: Typy podstawowe | Zadanie: Stwórz kilka zmiennych z różnymi typami i wyświetl je w konsoli.
// Instrukcja: Utwórz zmienne: name jako string, age jako number, isLearning jako boolean.
// Wypisz ich wartości w konsoli.

let userName: string = "Marta";
let userAge: number = 34;
let isLearning: boolean = true;

console.log(`To są moje pierwsze wartości: ${userName}, ${userAge}, ${isLearning}`);

// Ćwiczenie 2: Tablice Zadanie: Stwórz tablicę, która przechowuje listę ulubionych kolorów.
// Instrukcja: Stwórz zmienną colors typu string[], Dodaj kilka kolorów, Wyświetl pierwszy kolor z tablicy.

const colors: string[] = ["rózowy", "zielony", "czarny"];

console.log(`Pierwszy kolor z tablicy to: ${colors[0]}`);

// Ćwiczenie 3: Funkcja z typami Zadanie: Napisz funkcję, która sumuje dwie liczby.
// Instrukcja: Stwórz funkcję add. Określ typy dla parametrów (np. a: number, b: number).Funkcja powinna zwracać number.
// Wywołaj funkcję i wyświetl wynik w konsoli.

function sumOfNum(a: number, b: number): number{
    return a + b;
}

console.log(sumOfNum(1,11));

// Ćwiczenie 4: Interfejsy Zadanie: Zdefiniuj interfejs Car i stwórz obiekt zgodny z nim.
// Instrukcja: Stwórz interfejs Car z polami: brand: string, year: number,  electric: boolean. Utwórz obiekt myCar zgodny z interfejsem.
// Wyświetl markę (brand) w konsoli.

interface Car{
    brand: string;
    year: number;
    electric: boolean;
};

const myCar: Car = {
    brand: "Mercedes",
    year: 2020,
    electric: false
};

console.log(myCar);

// Ćwiczenie 5: Klasy Zadanie: Utwórz klasę Rectangle, która oblicza pole prostokąta.
// Instrukcja: Stwórz klasę Rectangle. Dodaj do niej pola: width i height (oba number). Stwórz metodę getArea, która zwraca pole prostokąta.
// Utwórz obiekt tej klasy i wyświetl wynik w konsoli.

 class Rectangle{
    width: number;
    height: number;
    constructor (width: number, height: number){
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10,5);

console.log(`Pole prostokąta to: ${rectangle.getArea()}`);

