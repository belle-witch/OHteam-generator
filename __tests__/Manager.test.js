const Manager = require ('../lib/Manager');
const manager = new Manager ('Cecilia', '7077', 'mistresspim@gmail.com', '931');

test('get manager values', () => {
    expect(manager.name).toBe('Cecilia');
    expect(manager.id).toBe('7077');
    expect(manager.email).toBe('mistresspim@gmail.com');
    expect(manager.officeNumber).toBe('931');
});

test('gets manager name', () => {
    expect (manager.getName()).toBe('Cecilia');
});

test('gets manager id', () => {
    expect (manager.getId()).toBe('7077');
});

test('gets manager email', () => {
    expect (manager.getEmail()).toBe('mistresspim@gmail.com');
});

test('gets manager officenumber', () => {
    expect (manager.getOfficeNumber()).toBe('931');
});

test('get manager role', () => {
    expect (manager.getRole()).toBe('Manager');
});

