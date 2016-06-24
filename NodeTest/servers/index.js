"use strict";
let http = require("http");
let url = require("url");

http.createServer(function(req, resp){
	console.time("xxxx");
	let pathName = url.parse(req.url).pathname;
	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write("<h1>"+pathName+"</1>");
	resp.end();
	console.timeEnd("xxxx");
}).listen(8888);