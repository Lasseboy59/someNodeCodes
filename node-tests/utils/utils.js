module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    console.log(user)
    return user;
};

// const add = (a, b) => a + b;
// module.exports = {
//     add
// }

