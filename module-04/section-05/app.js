// Module 04 | Section 05 | Create Object
const vehiclePrototype = {
    horn: function() {
        return 'Beep Beep';
    },
    advertisement: function() {
        return `${this.name} is the only car for you.`;
    }
};

const corvette = Object.create(vehiclePrototype);

corvette.name = 'Chevrolet Corvette';

console.log(corvette.advertisement());
console.log(corvette.horn());

const silverado = Object.create(vehiclePrototype, {
   name: {value: 'Silverado'}
});

console.log(silverado.advertisement());
console.log(silverado.horn());