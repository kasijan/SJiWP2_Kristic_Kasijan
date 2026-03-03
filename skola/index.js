

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {

    type: "input",
    name: "ime",
    message: "Unesi ime učenika: ",

  },
  {

    type: "number",
    name: "ocjena",
    message: "Unesite ocjenu: "

  }

  ])
  .then((answers) => {

    const tekst = `Ime: ${answers.ime}, Ocjena: ${answers.ocjena}\n`;

    fs.appendFileSync("ucenici.txt", tekst);
    console.log("Podaci su spremljeni u datoteku.");
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });