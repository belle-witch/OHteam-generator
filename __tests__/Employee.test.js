const Employee = require ('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Cecila, 70, mistresspim@gmail.com');

    expect(employee.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
    expect(employee.name).toBe('Cecila');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});



