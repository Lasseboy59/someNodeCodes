const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy corretly', () => {
        var spy = expect.createSpy();
        spy('Lasse', 45);
        expect(spy).toHaveBeenCalledWith('Lasse', 45);
    }); 

    it('should call saveUser with user object', () => {
        var email = 'lasse@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});