// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

// const { sequelize } = require('.db');

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

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    res.write(`<!DOCTYPE html>
    <html>
        <head>
            <title>404 - Ruta no encontrada</title>
        </head>
        <body>
            <div>
                <h1>404 - Ruta no encontrada</h1>
                <hr>
                <p>La página que intentas buscar no existe</p>
                <p>Redireccionando a la página de inicio...</p>
            </div>
            <script>
                setTimeout(() => {
                    window.location.href = 'http://localhost:${port}';
                }, 3000);
            </script>
        </body>
    </html>`);
    res.end();
    next();
});

// Starting the server
app.listen(port, () => console.log('Server on port: ', port));