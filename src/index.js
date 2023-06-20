// type genderType = 'Male' | 'Female' | 'Other';
var getUsersByGender = function (users, gender) {
    return users.filter(function (user) { return user.gender === gender; });
};
var users = [
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
var result = getUsersByGender(users, 'Male');
console.log(result);
console.log('working');
