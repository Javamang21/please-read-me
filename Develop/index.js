// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            }  else {
                console.log('Please add a title for your project !');
                return false;
            }
          }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description about your project? (Required)',
            validate: projectDescInput => {
                if (projectDescInput) {
                    return true;
                }  else {
                    console.log('Please add a description about your project !');
                    return false;
                }
              }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide instructions on how to download your project ? (Required)',
                validate: projectInstallInput => {
                    if (projectInstallInput) {
                        return true;
                    }  else {
                        console.log('You must include installation instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide usage information ! (Required)',
                validate: projectUsageInput => {
                    if (projectUsageInput) {
                        return true;
                    }  else {
                        console.log('You must include usage info');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Please provide contribution guidelines ! (Required)',
                validate: projectInstallInput => {
                    if (projectInstallInput) {
                        return true;
                    }  else {
                        console.log('You must include contribution guidelines');
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'test',
                    message: 'Please provide test instructions ? (Required)',
                    validate: projectInstallInput => {
                        if (projectInstallInput) {
                            return true;
                        }  else {
                            console.log('You must include test instructions');
                            return false;
                            }
                        }
                    },
                    {
                        type: 'list',
                        name: 'license',
                        message: 'Choose one of the following licenses for your project, or select no license if you choose to not have one. :',
                        choices: [  'No License',
                                    'Apache License 2.0',
                                    'BSD 3-Clause License',
                                    'MIT License',
                                    'Mozilla Public License 2.0',
                                    'GNU GPL v3 License',
                                ],
                        validate: projectLicenseInput => {
                            if (projectLicenseInput) {
                                return true;
                            }  else {
                                console.log('Please select one of the following choices');
                                return false;
                                }
                            }
                        },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is your Github Username ? (Required)',
                        validate: projectInstallInput => {
                            if (projectInstallInput) {
                                return true;
                            }  else {
                                console.log('Please do not forget to include your Github Username');
                                return false;
                                }
                            }
                        },

                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is your email address ? (Required)',
                                validate: projectEmailInput => {
                                    if (projectEmailInput) {
                                        return true;
                                    }  else {
                                        console.log('Please do not forget to include your email address');
                                        return false;
                                        }
                                    }
                                },
            
];

const readmePrompt = () => inquirer.prompt(questions);

const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise an send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File Created master!'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    readmePrompt()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(readme => {
        return writeToFile('README.md', readme);
    })
    .then(writeFileConfirm => {
        console.log(writeFileConfirm.message);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();

