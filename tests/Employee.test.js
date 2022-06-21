const Employee = require('../lib/Employee');
const employee = new Employee('Trevor', '30', 'employee@email.com');

test('Test for Employee', () => {
    expect(employee.name).toEqual('Trevor');
    expect(employee.id).toEqual('30');
    expect(employee.email).toEqual('employee@email.com');
});

test('Test for Employee name', () => {
    expect(employee.getName()).toEqual('Trevor');
});

test('Test for Employee ID', () => {
    expect(employee.getId()).toEqual('30');
});

test('Test for Employee email', () => {
    expect(employee.getEmail()).toEqual('employee@email.com');
});

test('Test for Employee role', () => {
    expect(employee.getRole()).toEqual('Employee');
});