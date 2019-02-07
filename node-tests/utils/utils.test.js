const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',() => {
    var res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');
});

it('should asyncAdd two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should asyncSqure a number', (done) => {
    utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
})

it('should verify that first and last name are set', () => {
    var user = {location: 'Vantaa', age: 45};
    var res = utils.setName(user, 'Lasse Ojala');

    expect(user).toEqual(res)

    expect(res).toInclude({
        firstName: 'Lasse',
        lastName: 'Ojala'
    })
}); 
