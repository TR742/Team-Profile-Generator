const Intern = require('../lib/Intern');
const intern = new Intern('Pete', '42', 'intern@email.com', 'University of Arizona');

test('Test for Intern', () => {
    expect(intern.name).toEqual('Pete');
    expect(intern.id).toEqual('42');
    expect(intern.email).toEqual('intern@email.com');
    expect(intern.school).toEqual('University of Arizona');
});

test('Test for Intern name', () => {
    expect(intern.getName()).toEqual('Pete');
});

test('Test for Intern ID', () => {
    expect(intern.getId()).toEqual('42');
});

test('Test for Intern email', () => {
    expect(intern.getEmail()).toEqual('intern@email.com');
});

test('Test for Intern school', () => {
    expect(intern.getSchool()).toEqual('University of Arizona');
});

test('Test for Intern role', () => {
    expect(intern.getRole()).toEqual('Intern');
});