// Module 04 | Section 04 | Prototype 2
function Vehicle(name, model, owner, productionYear) {
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.yearsOfUsage = function() {
        return new Date().getUTCFullYear() - new Date(productionYear).getUTCFullYear();
    };
}

function Motorbike(name, model, owner, numberOfWheels, productionYear) {
    Vehicle.call(this, name, model, owner, productionYear);
    this.numberOfWheels = numberOfWheels;
}

Vehicle.prototype.getOwner = function() {
    return `${this.owner} owns ${this.name}.`;
};

const bmw = new Vehicle("BMW", "z4", "Esmaeil MIRZAEE", "10-10-2010");
console.log(bmw.getOwner());

// half 2
// This assignment must happen before the object definition (ie honda) unless you will get function is not defined.
Motorbike.prototype = Object.create(Vehicle.prototype);
const honda = new Motorbike("Honda", "2020 Fireblade SP", "Esmaeil MIRZAEE", "10-10-2020");

console.log(bmw, honda);