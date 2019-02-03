let square = num => num * num
console.log(square(9))

let user = {
    name: 'Lasse',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);        
    }
};

user.sayHi(1, 2);
console.log('----------')
user.sayHiAlt(1, 2, 3);