const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call parent constructor using super
        super (name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;