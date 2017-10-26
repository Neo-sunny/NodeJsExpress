const express = require('express')
const http = require('http')
const morgan = require('morgan');
const bodyParser = require('body-parser')


const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use('/dishes', dishRouter );
app.use(express.static(__dirname+ '/public'))
app.use(bodyParser.json());

/*

app.get('/dishes/:dishId', (req, res, next) => {
    res.send('will send details of the dish '+ req.params.dishId+ ' to you ');
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode=403;
    res.send('PUT operation not supported on /dishes/'+req.params.dishId );
});

app.put('/dishes/:dishId', (req, res, next) => {

res.write('Updating the dish: '+ req.params.dishId+ '\n' );
res.end('will update the dish: '+ req.body.name + ' with details '+ req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {

    res.send('Deleting the dish: '+ req.params.dishId );
});
*/
app.use((req, res, next) =>{

    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');

} );

const server = http.createServer(app);

server.listen(port, hostname, () =>{
     console.log(`server is running at http://${hostname}:${port}`)
} );