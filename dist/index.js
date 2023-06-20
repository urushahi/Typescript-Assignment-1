"use strict";
const getUsersByGender = (users, gender) => {
    return users.filter((user) => user.gender === gender);
};
const users = [
    {
        id: 1,
        name: 'Marie Jane',
        gender: 'Female',
        age: 30,
        isRetired: true,
        email: 'marie@gmail.com',
    },
    {
        id: 2,
        name: 'Sam Perk',
        gender: 'Male',
        age: 38,
        isRetired: false,
        email: 'sam@hotmail.com',
    },
    {
        id: 3,
        name: 'Annie Johnson',
        gender: 'Female',
        age: 30,
        isRetired: true,
        email: 'annie@gmail.com',
    },
    {
        id: 4,
        name: 'Monica Geller',
        gender: 'Female',
        age: 29,
        isRetired: false,
        email: 'monica@gmail.com',
    },
];
const result = getUsersByGender(users, 'Female');
console.log(result);
console.log('working');
//# sourceMappingURL=index.js.map