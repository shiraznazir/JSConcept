// First Class :-

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return (
            `This name of the animal  is ${this.name} and the age is ${this.age}`
        )
    }
}

// First Instances :- 

const firstAnimal = new Animal("Kutta", 2);
console.log(firstAnimal.getInfo()); 

const secondAnimal = new Animal("Buffallo", 20);
console.log(secondAnimal.getInfo());

// Inheritance

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    bark(){
        return 'woof';
    }
}


const dog = new Dog("German Shaford", 24 , "roti");
console.log(dog.getInfo());
console.log(dog.age);
console.log(dog.bark());

// Encapsulation

console.log("Encapsultion :- ");

class Cat extends Animal{
    #weight;
    constructor(name , age, weight){
        super(name, age);
        this.#weight = weight;
    }
    // Getter
    getWeight(){
        return this.#weight;
    }
    // Setter
    setWeight(weight){
        this.#weight = weight;
    }

}

const cat = new Cat("Pussy", 10, "15 kg");
console.log(cat.getInfo());
console.log(cat.getWeight());
cat.setWeight("23 kg");
console.log(cat.getWeight());

// Polymorphism

class Animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    makeSound(){
        return "Some nice Sound"
    }
}

class Cow extends Animals{
    constructor(name, age){
        super(name, age);
    }
    makeSound(){
        return "Bha Bha";
    }
}

class Goat extends Animals{
    constructor(name, age){
        super(name, age);
    }
    makeSound(){
        return "mai mai";
    }
}

const cow = new Cow("jdhbd", 29);
const goat = new Goat("pkjhbd", 10);

console.log(cow.makeSound());
console.log(goat.makeSound());

console.log();