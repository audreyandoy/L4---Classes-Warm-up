function Person(first, last, age, interests, img) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.interests = interests;
    this.img = img;
}


let bob = new Person('Bob', "Sponge", 20, ['jellyfish catching', 'Sandy', 'friendship'], "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png")

console.log(bob.img)
document.getElementById("person").src = bob.img

let patrick = new Person('Patrick', "Star", 20, ['sleeping', 'eating', 'fun'])

console.log(patrick.name['first'])
console.log(patrick.age)

//////////////////////////////////////////