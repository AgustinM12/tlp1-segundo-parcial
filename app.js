// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const port = 45635;

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <h1>404</h1>
        <h2>Pagina no encontrada, redireccionando a la pagina de inicio en 3 segundos</h2>
    </body>
        <script>
            setTimeout(() => {
                window.location.href = 'http://localhost:${port}';
            }, 3000);
        </script>
        </html>`);
    next();
});

// Starting the server
app.listen(port, () => console.log('Server on port: ', port));