// Module 04 | Section 06 | EcmaScript 6
class Vehicle {
    constructor(name, model, manufacturedYear, owner) {
        this.name = name;
        this.model = model;
        this.producedIn = new Date(manufacturedYear);
        this.owner = owner;
    }

    getYearsOfUsage() {
        return new Date().getUTCFullYear() - this.producedIn.getUTCFullYear();
    }

    priceCalculator(currentUnsoldPrice) {
        return `The price is ${currentUnsoldPrice - (currentUnsoldPrice * 5 / 100)}`;
    }

    getOwner() {
        return `The car belongs to ${this.owner}`;
    }

    sold(newOwner) {
        this.owner = newOwner;
    }

    static getSpeed() {
        return `Current speed is ${Math.floor(Math.random() * 180 + 1)}km/h.`;
    }
}

const corvette = new Vehicle("Chevrolet", "Corvette", "01-01-2008", "Esmaeil MIRZAEE");
console.log(corvette.getYearsOfUsage());
console.log(corvette.priceCalculator(100000));
console.log(corvette.getOwner());
corvette.sold("Samuel Russell");
console.log(corvette.getOwner());
console.log(Vehicle.getSpeed());