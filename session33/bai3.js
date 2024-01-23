class Contact {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Phone: ${this.phoneNumber}, Email: ${this.email}`);
    }

    displayFullInfo() {
        console.log(`Full Information for ${this.name}:`);
        console.log(`Name: ${this.name}`);
        console.log(`Phone: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
    }
}

let phoneBook = [
    new Contact("Quan", "374892384", "quan@example.com"),
    new Contact("King", "124198248", "king@example.com"),
];

console.log("Phone Book Contacts:");
for (let i = 0; i < phoneBook.length; i++) {
    console.log(`Contact ${i + 1}:`);
    phoneBook[i].displayFullInfo();
}
