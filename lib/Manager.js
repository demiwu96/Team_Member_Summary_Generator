// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

// const mark = new Manager("Mark", 47895, "markxu@gmail.com", "0970327949");

// console.log(mark);
// mark.getName();
// mark.getEmail();
// mark.getRole();
// mark.getId();