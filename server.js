let http = require( 'http' ),
    express = require('express'),
    app = express(),
    server = http.createServer(app);


app.use( express.static( __dirname + '/build' ) );
app.get( '*', function ( request, response ) { 
    response.redirect( '/' );
}); 

let port = process.env.PORT || 5000;
server.listen(port);
console.log('Express-сервер прослушивает порт %d в режиме %s',
	        server.address().port, app.settings.env);