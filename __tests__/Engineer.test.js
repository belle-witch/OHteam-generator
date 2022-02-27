const Engineer = require ('../lib/Engineer');
const engineer = new Engineer ('Cecilia', '7077', 'mistresspim@gmail.com', 'matz');

test('get engineer values', () => {
    expect(engineer.name).toBe('Cecilia');
    expect(engineer.id).toBe('7077');
    expect(engineer.email).toBe('mistresspim@gmail.com');
    expect(engineer.github).toBe('matz');
});

test('gets engineer name', () => {
    expect (engineer.getName()).toBe('Cecilia');
});

test('gets engineer id', () => {
    expect (engineer.getId()).toBe('7077');
});

test('gets engineer email', () => {
    expect (engineer.getEmail()).toBe('mistresspim@gmail.com');
});

test('gets engineer github', () => {
    expect (engineer.getGithub()).toBe('matz');
});

test('get engineer role', () => {
    expect (engineer.getRole()).toBe('Engineer');
});