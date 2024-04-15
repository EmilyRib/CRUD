// Importa o módulo http do Node.js, que é usado para lidar com requisições HTTP.
const http = require("http");

// Importa o módulo url do Node.js, que é usado para analisar e manipular URLs.
const url = require("url");

// Define a porta na qual o servidor irá escutar as requisições.
const port = 3000;

// Cria um servidor HTTP utilizando o método createServer() do módulo http.
const server = http.createServer((req, res) => {
    // Analisa a URL da requisição atual e retorna um objeto contendo informações sobre a URL.
    var urlInfo = require("url").parse(req.url, true);

    // Imprime no console os componentes da URL para fins de depuração.
    console.log("URL completa:", req.url);
    console.log("Protocolo:", urlInfo.protocol);
    console.log("Hostname:", urlInfo.hostname);
    console.log("Porta:", urlInfo.port);
    console.log("Caminho:", urlInfo.pathname);
    console.log("Query String:", urlInfo.search);
    console.log("Parâmetros de consulta:", urlInfo.query);

    // O '?' é usado na URL para iniciar a Query String 
    // e separar os parâmetros de consulta do resto da URL, 
    // proporcionando uma maneira padrão e conveniente de enviar
    // dados para o servidor em uma requisição GET.

    // Extrai o parâmetro 'name' da query string da URL.
    const name = urlInfo.query.name;

    // Configura o código de status da resposta para 200 (OK).
    res.statusCode = 200;

    // Configura o cabeçalho da resposta para indicar que o conteúdo será HTML.
    res.setHeader("Content-Type", "text/html");

    // Verifica se o parâmetro 'name' está presente na query string da URL.
    if (!name) {
        // Se 'name' não estiver presente, retorna um formulário HTML para preencher o nome.
        res.end(
            "<h1>Preencha seu nome:</h1><form method='GET'> <input type='text' name='name'/> <input type='submit' value='Enviar'></form>"
        );
    } else {
        // Se 'name' estiver presente, retorna uma mensagem de boas-vindas personalizada.
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
    }
});

// Faz o servidor escutar na porta especificada e imprime uma mensagem no console quando estiver pronto.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
