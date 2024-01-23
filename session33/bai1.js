class Human {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}

let person = new Human("Thanh Tung", 25, "Dong Da Xa Dan");

console.log("Thong tin:");
person.displayInfo();

person.birthdate = "02-03-2015";

delete person.age;

console.log("Sau cung:");
person.displayInfo();
