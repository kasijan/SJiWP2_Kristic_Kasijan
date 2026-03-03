import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([

    {

    type: "number",
    name: "a",
    Message: "unesite stranicu a: ",


    },
    {

        type: "number",
        name: "b",
        message: "unesite stranicu b:"


    }
  ])
  .then((answers) => {
    let rez = `Rezultat je ${answers.a*answers.b}`;

    fs.appendFileSync("povrsina.txt", rez)
    console.log("Podaci su spremljeni u datoteku.");



  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });