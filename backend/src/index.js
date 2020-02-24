require('dotenv').config();
const app = require('./app');
require('./database');


/* var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'msqmosqui24',
    database: 'db_testing_stuff',
    port: 3306
});
connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});
connection.end(); */

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();