// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;

// const khoi = new Engineer("Khoi", 77284, "khoinguyen@gmail.com", "gh0stl0nely");

// console.log(khoi);
// khoi.getGithub();
// khoi.getRole();
// khoi.getName();
// khoi.getEmail();
// khoi.getId();