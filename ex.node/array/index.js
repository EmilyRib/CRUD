const chalk = require("chalk")

const statusCode = [
    {code: 100, message:"Continue"},
    {code: 200, message:"Ok"},
    {code: 500, message:"Internal Server Error"}
    //Adicione mais códigos de status conforme o necessário
]

//exibindo as informações de status code
statusCode.forEach(status => {
    console.log(`Status ${status.code}: ${status.message}`)
})
