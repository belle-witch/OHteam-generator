const Employee = require ('../lib/Employee.js');
const employee = new Employee('Cecilia', '7077', 'mistresspim@gmail.com');

test('get constructor values', () => {
    expect(employee.name).toBe('Cecilia');
    expect(employee.id).toBe('7077');
    expect(employee.email).toBe('mistresspim@gmail.com');
});

test('gets employee name', () => {
    expect (employee.getName()).toBe('Cecilia');
});

test('gets employee id', () => {
    expect (employee.getId()).toBe('7077');
});

test('gets employee email', () => {
    expect (employee.getEmail()).toBe('mistresspim@gmail.com');
});

test('get employee role', () => {
    expect (employee.getRole()).toBe('Employee');
});