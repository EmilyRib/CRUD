const chalk = require("chalk");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question(`Qual a sua linguagem preferida?`, (language) => {

    if( language == "JavaScript" ){
        console.log(chalk.yellow.bold(`A minha linguagem preferida é: ${language}`))
    }else if (language == "html") {
        console.log(chalk.bgBlue.black(`A minha linguagem preferida é: ${language}`))
    }

    readline.close();
});