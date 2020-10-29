// Module 01 | Section 10
// Object Literals
const person = {
  firstName: 'Esmaeil',
  lastName: 'MIRZAEE',
  email: 'esmaeilmirzaee@c.c',
  hobbies: ['Swimming', 'Running'],
  address: {
    city: 'Tehran',
    geoLocation: {
      longitude: 11.11,
      latitude: 22.22,
    },
    provenance: 'Tehran',
  },
  getCurrentYear: function () {
    return new Date().getFullYear();
  },
  getMaillingAddress: function () {
    // return city + '-' + provenance; // error
    return this.city + '-' + this.provenance;
  },
};

res = person.firstName;
res = person['firstName'];
res = person.hobbies;
res = person.hobbies[0];
res = person.hobbies.length;
res = person.address;
res = person.address.city;
res = person.geoLocation; // error -> undifined
res = person.address.geoLocation;
res = person.address.geoLocation.longitude;
res = person.getCurrentYear();
res = person.getMaillingAddress;
console.log(res);

const people = [person, person];
