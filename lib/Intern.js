// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
// const amy = new Intern("Amy", 44732, "amychen@gmail.com", "UBC");

// amy.getId();
// amy.getSchool();
// amy.getRole();
// amy.getEmail();
// amy.getName();