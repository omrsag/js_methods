const numbers = [5, 10, 15, 20, 25];

const result = numbers.filter((number) => {
    return number > 10;
});

console.log(result); // [ 15, 20, 25 ]

//

const users = [
    { id: 1, name: "Omar", active: true },
    { id: 2, name: "Ali", active: false },
    { id: 3, name: "Ahmad", active: true }
];

const activeUser = users.filter(user => user.active === true) // const activeUser = users.filter(user => user.active)

console.log(activeUser) // [ { id: 1, name: 'Omar', active: true }, { id: 3, name: 'Ahmad', active: true } ]




// return array