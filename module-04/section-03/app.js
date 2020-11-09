// Module 04 | Section 04 | Prototype 3
// Object Prototype
// Constructor Prototype

function Vehicle(name, model, owner, productionYear) {
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.yearsOfUsage = function() {
        const date = new Date(productionYear);
        return new Date().getUTCFullYear() - date.getUTCFullYear();
    };
}

// half 2
Vehicle.prototype.getOwner = function() {
    return `${this.owner}`;
};

// half 2
Vehicle.prototype.sold = function(newOwner) {
    this.name = newOwner;
};

const bmw = new Vehicle("BMW", "z4", "Esmaeil MIRZAEE", "09-12-2018");
console.log(bmw);
console.log(bmw.yearsOfUsage());
// half 2
console.log(bmw.getOwner());