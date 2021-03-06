// required npm and import files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// inquirer questions for members' information
const internQ = [
    {
        message: "Enter intern's name: ",
        name: "name"
    },
    {
        type: "number",
        message: "Enter intern's ID: ",
        name: "id"
    },
    {
        message: "Enter intern's email: ",
        name: "email"
    },
    {
        message: "Which school is the intern from?",
        name: "school"
    }
];
const engineerQ = [
    {
        message: "Enter engineer's name: ",
        name: "name"
    },
    {
        type: "number",
        message: "Enter engineer's ID: ",
        name: "id"
    },
    {
        message: "Enter engineer's email: ",
        name: "email"
    },
    {
        message: "Enter engineer's Github username: ",
        name: "github"
    }
];
const managerQ = [
    {
        message: "Enter manager's name: ",
        name: "name"
    },
    {
        type: "number",
        message: "Enter manager's ID: ",
        name: "id"
    },
    {
        message: "Enter manager's email: ",
        name: "email"
    },
    {
        type: "number",
        message: "Enter manager's office number: ",
        name: "officeNumber"
    }
]

gatherInfo();
const members = [];

async function gatherInfo() {
    try {
        // input manager information
        const managerInfo = await inquirer.prompt(managerQ);
        const newManager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        members.push(newManager);

        // input engineer information
        const engineerNum = await inquirer.prompt([{ type: "number", message: "How many engineers?", name: "num" }]);
        for (var i = 0; i < engineerNum.num; i++) {
            const response = await inquirer.prompt(engineerQ)
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
            members.push(newEngineer);
        };

        // input intern information
        const internNum = await inquirer.prompt([{ type: "number", message: "How many interns?", name: "num" }]);
        for (var i = 0; i < internNum.num; i++) {
            const response = await inquirer.prompt(internQ)
            const newIntern = new Intern(response.name, response.id, response.email, response.school);
            members.push(newIntern);
        };

        const html = await render(members);
        // check if output folder exists, create the folder if not
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        };

        // create the html page
        fs.writeFile(outputPath, html, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Successful!");
            };
        });

    } catch (err) {
        // if any err happens, show err
        console.log(err);
    };
};