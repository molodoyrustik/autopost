var express = require('express');
var fallback = require('express-history-api-fallback');
var app = express();

const root = `${__dirname}/public`;
app.use(express.static(root))
app.use(fallback('index.html', { root }))


app.get('/', function(req,res) {
	return res.send('hello');
})

app.listen(8081, function(){
	console.log("Listen on port: 8081...");
})
