import http from 'http'
import assets from './assets'
console.log(assets)

const server = http.createServer((req, res) => {
	switch(req.url){
		case '/':
			assets("index.html", (err, content) => {
				res.end(content)
			})
			break
		case '/app.css':
			assets("app.css", (err, content) => {
				res.end(content)
			})
			break
		case '/app.js':
			assets("app.js", (err, content) =>{
				res.end(content)
			})
			break
		default: 
			res.statusCode = 404
			res.end('Not Found')
			break
	}
})

server.listen(4000, () => console.log("server started at port 4000") )