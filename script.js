let id = Symbol("Hello");
console.log(id);
alert(id.toString());
alert(id.description);

let age = Symbol("age");
let user = {
    name : "Raaz",
    class : "B.A",
    [age] :25
};

console.log(user);

for (let key in user){
    console.log(key);
};

console.log(user);

console.log(JSON.stringify(user));
