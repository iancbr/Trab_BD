const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var IDs = [], ValorTotalDevidoReais = [], Nome = [];

Router.get("/pgnf", (req,res)=>[
    mysqlConnection.query("Select ID, ValorTotalDevidoReais, NomeRazaoSocial from pgnf LIMIT 100", (err, rows, fields)=>{
        if(!err){
            formatData(rows);
            res.send(jsonArray);
            console.log(jsonArray);
            // res.send(rows);
        }
        else{
            console.log(err);
        }
    })
]);

function formatData(dataArray) {
    for(var i = 0; i < dataArray.length; i++) {
        IDs[i] = dataArray[i].ID;
        ValorTotalDevidoReais[i] = dataArray[i].ValorTotalDevidoReais;
        Nome[i] = dataArray[i].NomeRazaoSocial
    }
    jsonArray = [IDs, ValorTotalDevidoReais, Nome];
    // console.log("in FormatData()...\n");
    // console.log(jsonArray);
  }

module.exports = Router;