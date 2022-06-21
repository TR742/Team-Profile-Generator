const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Billy Bob', '3', 'engineer@email.com', 'github.com/engineer');

test('Test for Engineer', () => {
    expect(engineer.name).toEqual('Billy Bob');
    expect(engineer.id).toEqual('3');
    expect(engineer.email).toEqual('engineer@email.com');
    expect(engineer.github).toEqual('github.com/engineer');
});

test('Test to Engineer name', () => {
    expect(engineer.getName()).toEqual('Billy Bob');
});

test('Test for Engineer ID', () => {
    expect(engineer.getId()).toEqual('3');
});

test('Test for Engineer email', () => {
    expect(engineer.getEmail()).toEqual('engineer@email.com');
});

test('Test for Engineer Github', () => {
    expect(engineer.getGithub()).toEqual('github.com/engineer');
});

test('Test for Engineer role', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});