const express = require('express');
const path = require("path");
const mysql = require('mysql2');

const app = express();
const initPage = path.join(__dirname, "/public/index2.html");

app.use(express.static(__dirname + '/public'));

const server = app.listen(8888, () => {
    console.log('Servidor web iniciado en http://localhost:8888');
});


app.get('/', function (req, res) {
    // res.sendFile(__dirname + "/public/index1.html");
    res.sendFile(initPage);
});

app.get('/users', function (req, res) {
    //Conexion

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'temporal',
        database: 'tema4',
        port: 3306
    });

    connection.connect(function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    // Select
    var query = connection.query('SELECT * FROM alumnos', function (error, result) {
        if (error) {
            throw error;
        } else {
            if (result.length > 0) {
                let resultado = JSON.stringify(result);
                // console.log("Resultado... ", resultado)
                res.send(resultado);
            } else {
                console.log('Registro no encontrado');
            }
        }
    });
    connection.end();


});