// Classes :-
// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax.

// Classes are in fact "special functions", 
// and just as you can define function expressions and function declarations,

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

var rec = new Rectangle(3, 12);
console.log(rec.width," : ", rec.height);

// Hoisting :- 
// An important difference between function declarations and 
// class declarations is that while functions can be called in code 
// that appears before they are defined, classes must be defined before they can be constructed. 
// Code like the following will throw a ReferenceError
// This occurs because while the class is hoisted its values are not initialized.

//var rec2 = new Rectangle2(12, 24); // Reference Error
class Rectangle2{}

// Class expressions:-
// A class expression is another way to define a class.
// Class expressions can be named or unnamed. 
// The name given to a named class expression is local to the class's body. 

let Rectangle3 = class{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

//console.log(Rectangle3.name);

Rectangle3 = class{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

console.log(Rectangle3.name);

// Class body and method definitions :-
// The body of a class is the part that is in curly brackets {}. 
// This is where you define class members, such as methods or constructor.

// Constructor:-
// The constructor method is a special method for creating and initializing an object created 
// with a class. There can only be one special method with the name "constructor" in a class. 
// A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

// A constructor can use the super keyword to call the constructor of the super class.

// Static initialization blocks :-
// Class static initialization blocks allow flexible initialization of class static properties 
// including the evaluation of statements during initialization, and granting access to private scope.

// Multiple static blocks can be declared, and these can be interleaved with the declaration of static 
// properties and methods (all static items are evaluated in declaration order).

// Prototype methods:-

class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    // getter
    get area(){
        return this.calArea();
    }
    // method
    calArea(){
        return this.width * this.height;
    }
}

const square = new Shape(10, 10);
console.log(square.area);

// Generator methods:-

class Polygon{
    constructor(...sides){
        this.sides = sides;
    }
    // Method 
    *getSides(){
        for(const side of this.sides){
            yield side;
        }
    }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);
console.log([...pentagon.getSides()]);

// Static methods and properties :-
// The static keyword defines a static method or property for a class. Static members (properties and 
// methods) are called without instantiating their class and cannot be called through a class instance.
// Static methods are often used to create utility functions for an application, whereas static properties
// are useful for caches, fixed-configuration

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static displayName = "Point";
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

p1.displayName;
p1.distance;
p2.displayName;
p2.distance;
console.log(p1.displayName);
console.log(Point.displayName);
console.log(Point.distance(p1, p2));
