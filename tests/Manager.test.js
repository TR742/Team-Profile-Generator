const Manager = require('../lib/Manager');
const manager = new Manager('Boss Hog', '1', '1', 'Manager@email.com');

test('Test for Manager', () => {
    expect(manager.name).toEqual('Boss Hog');
    expect(manager.id).toEqual('1');
    expect(manager.officeNumber).toEqual('1');
    expect(manager.email).toEqual('Manager@email.com')
});

test('Test for Manager name', () => {
    expect(manager.getName()).toEqual('Boss Hog');
});

test('Test for Manager ID', () => {
    expect(manager.getId()).toEqual('1');
});

test('Test for Manager email', () => {
    expect(manager.getEmail()).toEqual('Manager@email.com');
});

test('Test for Manager office number', () => {
    expect(manager.getOfficeNumber()).toEqual('1');
});

test('Test for Manager role', () => {
    expect(manager.getRole()).toEqual('Manager');
});