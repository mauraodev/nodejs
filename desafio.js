var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	var result = url.parse(request.url, true);
	var pagina = "";

	if (result.path == "/") {
		pagina = __dirname + "/artigo.html";
	} else if (result.path == "/artigo") {
		pagina = __dirname + "/artigo.html";
	} else if (result.path == "/contato") {
		pagina = __dirname + "/contato.html";
	} else {
		pagina = __dirname + "/erro.html";
	}

	console.log(result);

	fs.readFile(pagina, function (err, html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(html);	
	});
});

server.listen(3000, function() {
    console.log("Servidor rodando");
});