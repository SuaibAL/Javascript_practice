let person = {
    name: "Rahim",
    age: 22,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}    