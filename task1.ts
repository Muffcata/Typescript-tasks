type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";

type Person = { name: string};
type Employee = {employeeId: number};
type userWorker = Person & Employee;

let worker: userWorker = { name: "Kate", employeeId: 23 };

//Mapped Types
type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
}

type User = {name: string; age: number};
const user: ReadonlyType<User> = {name: "John", age: 30};

//Utility Types : Partial, Reaonly, Pick, Omit
type User1 = {id: number; name: string; age: number};
type PartialUser = Partial<User>; 

console.log(user);

//Generics
function identity<T>(value: T): T {
    return value;
}

const result = identity<number>(42);

//Funkcja zwraca tylko number
function getNumberFirstElement(arr: number[]): number {
    return arr[0];
}

//Teraz dowolny typ
function getEachFirstElement<T>(arr: T[]): T{
    return arr[0];
}

// Tablice z generykami
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

const number = reverseArray([1, 2, 3]);
const strings = reverseArray(["a", "b", "c"]);
console.log(number);

//Interfejsy i typy
interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Typescript"};
const numberBox: Box<number> = { content: 42};

//Klasy z generykami
class DataHolder<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this. value = newValue;
    }
}

const holder = new DataHolder<string>("Hello!");
holder.setValue("World");
console.log(holder.getValue());

//Ograniczenia generyków(extends)
function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
} 

logLength("Hello");
logLength([1, 2, 3]);

// Ćwiczenie 1: Napisz typ CarOrBike, który może mieć właściwości:
// 1. Jeśli to samochód, musi mieć brand, seats i isElectric.
// 2. Jeśli to rower, musi mieć type (np. "road" lub "mountain") i gearCount.
 
 type Car = { brand: string; seats: number; isElectric: boolean };
 type Bike = { type: string, gearCount: number };

 type CarOrBike = Car | Bike;

 const car: CarOrBike = { brand: "Mercedes", seats: 4, isElectric: true };
 const bike: CarOrBike = { type: "road", gearCount: 4};

 console.log(`Samochód: ${"brand" in car ? `marka: ${car.brand}, siedzenia: ${car.seats}, elektryczny: ${car.isElectric}` : "Nie samochód"}`);
 console.log(`Rower: ${"type" in bike ? `typ: ${bike.type}, ilość biegów: ${bike.gearCount}` : "Nie rower"}`);

//Ćwiczenie 2: Generyczny interfejs Pair
//Zadanie: Stwórz generyczny interfejs do przechowywania dwóch wartości.
//Twoje zadanie:
//Zdefiniuj interfejs Pair<T, U>, gdzie:
// - T to typ pierwszej wartości.
// - U to typ drugiej wartości.
//Zaimplementuj funkcję, która przyjmuje parę wartości i zwraca je w odwrotnej kolejności.

interface Pair<T, U> {
    firstValue: T;
    secondValue: U;
}

function reverseValue<T, U>(pair: Pair<T,U>): Pair<U, T>{
    return {
        firstValue: pair.secondValue,
        secondValue: pair.firstValue,
    }
}

// Ćwiczenie 2: Generyki
// Stwórz funkcję, która porównuje wartości tego samego typu i zwróć wiekszą wartość


function getGreaterValue<T>(value1: T, value2: T): T {
    return value1 > value2 ? value1 : value2; //Porównujemy o zwracamy większą
}

//Ćwiczenie 3: Stwórz funkcję generyczną, która:
//Przyjmuje tablicę wartości dowolnego typu T.
//Zwraca największy element w tablicy (np. dla liczb – największą liczbę, dla łańcuchów – alfabetycznie ostatni element).

function getMaxValue<T>(values: T[]): T {
    if (values.length === 0){
        throw new Error ("Tablica jest pusta");
    }

    let maxValue = values[0];

    for(let i = 1; i < values.length; i++){
        if (values[i]>maxValue){
            maxValue = values[i];
        }
    }

    return maxValue;
}

//Ćwiczenie 4: Stwórz funkcję generyczną, która:
//Przyjmuje tablicę wartości dowolnego typu T.
//Zwraca zarówno największy, jak i najmniejszy element w tablicy jako obiekt

function getMinMaxValue<T>(values: T[]): {min: T; max: T} {
    if (values.length === 0){
        throw new Error ("Tablica jest pusta");
    }

    let max = values[0];
    let min= values[0];

    for (let i = 1; i < values.length; i++){
        if (values[i] < min){
            min = values[i];
    }
        if (values[i] > max){
            max = values[i];
        }
    }
    
    return {min, max};
}