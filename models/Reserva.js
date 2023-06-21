// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require('../db');

const reserva = sequelize.define('reserva', {
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_reserva: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaDeReserva: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

reserva.sync();

module.exports = reserva;