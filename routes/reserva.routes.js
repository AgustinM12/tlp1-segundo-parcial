// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const controller = require('../controllers/reserva.controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

router.get('/index', (req, res) => {
    res.render('index');
});

router.get('/reserva/crear', (req, res) => {
    res.render('crearReserva');
});

// Crear una reserva
router.post('/reserva/crear',);

// Actualizar una reserva
router.put('/api/:id',);

// Eliminar una reserva de forma lógica
router.delete('/api/:id',);


module.exports = router;