const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "seubanco",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Conectado!");
    }
    else{
        console.log("Erro ao conectar!" + err);
    }
})

module.exports = mysqlConnection;