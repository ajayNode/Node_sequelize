const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'crud_node',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
module.exports = sequelize