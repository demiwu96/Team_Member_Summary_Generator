# Team Member Summary Generator

## Description
The users can create team member summary page through one command:
```sh
node index.js
```
The user will be prompt for information about the team manager and then information about the engineers and interns. After entering all the necessary information, the application will create a HTML page with all the information.
Each role will have different information:

Manager:
* Name
* ID
* Office number

Engineer:
* Name
* ID
* Email
* Github username

Intern:
* Name
* ID
* Email
* School

All the JavaScript files in lib folder should pass all unit tests.

## Installation
* npm required:
    * file-system
    * [jest](https://jestjs.io/)
    * [inquirer](https://www.npmjs.com/package/inquirer)
    * [path](https://nodejs.org/docs/latest/api/path.html)

## Built with
* HTML
* Bootstrap
* JavaScript
* Node.js

## Credits
Yu-Hsuan Wu

## Demo
![demo](./demo/demo.gif)
<br>
See example folder for the example HTML file