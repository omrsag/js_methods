const numbers = [5, 10, 15, 20];

const result = numbers.find((number) => {
    return number > 10;
});

console.log(result); // 15

//

const users = [
    { id: 1, name: "Omar" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ahmad" }
];

const user = users.find(user => user.id === 2)

console.log(user); // { id: 2, name: "Ali" }