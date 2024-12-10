let message: string = "Hello, Typescript";
console.log(message);

let age: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding"];

class Animal {
    name: string;
    constructor (name: string){
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} makes a noise`);
    }
}

const dog = new Animal("Dog"); 
dog.speak();
