const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',() => {
    var res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');

    // if(res !== 44) {
    //     throw new Error(`Expectec 44, but got ${res}`);
    // }

});


it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
})

// should verify first and last name are set
// assert it includes firstName and lastName with proper values

it('should verify that first and last name are set', () => {
    var user = {location: 'Vantaa', age: 45};
    var res = utils.setName(user, 'Lasse Ojala');

    expect(user).toEqual(res)

    // console.log(res.firstName);
    expect(res).toInclude({
        firstName: 'Lasse',
        lastName: 'Ojala'
    })
}); 

// it('should expect some values', () => {
//     // expect(12).toNotBe(13);
//     // expect({name: 'Lasse'}).toEqual({name: 'Lasse'});
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Lasse',
//         age: 45,
//         location: 'Vantaa'
//     }).toInclude({
//         age: 45
//     })
// });