const Intern = require ('../lib/Intern');
const intern = new Intern ('Cecilia', '7077', 'mistresspim@gmail.com', 'Vanderbilt');

test('get intern values', () => {
    expect(intern.name).toBe('Cecilia');
    expect(intern.id).toBe('7077');
    expect(intern.email).toBe('mistresspim@gmail.com');
    expect(intern.school).toBe('Vanderbilt');
});

test('gets intern name', () => {
    expect (intern.getName()).toBe('Cecilia');
});

test('gets intern id', () => {
    expect (intern.getId()).toBe('7077');
});

test('gets intern email', () => {
    expect (intern.getEmail()).toBe('mistresspim@gmail.com');
});

test('gets intern school', () => {
    expect (engineer.getSchool()).toBe('Vanderbilt');
});

test('get intern role', () => {
    expect (intern.getRole()).toBe('Intern');
});