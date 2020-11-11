class Vehicle {
    constructor(name, model, productionYear, owner) {
        this.name = name;
        this.model = model;
        this.owner = owner;
        this.productionYear = productionYear;
    }
    yearsOfUsage() {
        const pYear = new Date(this.productionYear);
        return new Date().getUTCFullYear() - pYear.getUTCFullYear();
    }
}

class Chevrolet extends Vehicle {
    constructor(name, model, productionYear, owner, partNumber) {
        super(name, model, productionYear, owner);
        this.partNumber = partNumber;
    }
}

const corvette = new Chevrolet('Chevrolet', 'Corvette', "Sep-12-2018", "Esmaeil MIRZAEE", "12345E1");
console.log(corvette);
console.log(`The car is used for ${corvette.yearsOfUsage()} years.`);