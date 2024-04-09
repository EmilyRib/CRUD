const chalk = require("chalk");

const nota = 6;

if(nota >= 7 ){
    console.log(chalk.green.bold("Parabéns, você passou!"))
}else{
    console.log(chalk.bgYellow.black("Você precisa fazer a prova final!"))
}