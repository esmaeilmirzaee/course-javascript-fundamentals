// Module 04 | Section 01 | Object Oriented
// Car constructor
function Vehicle(name, model, manufacturingYear) {
    this.name = name;
    this.model = model;
    this.calculateAge = function() {
        const productionYear = new Date(manufacturingYear).getUTCFullYear();
        return Math.abs(productionYear - new Date().getUTCFullYear());
    };
}

const BMW = new Vehicle("BMW", '727', "09-10-1981");
console.log(BMW.calculateAge());