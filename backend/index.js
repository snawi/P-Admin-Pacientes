
import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './config/db.js';

const app = express();
//llamos dotenv para leer variables de entorno
dotenv.config()

//llamamos la funcion de la bd
conectarDB()


app.use("/", (req, res) => {
    res.send("hola express nuevamente con wilmer")
})




const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`servidor funcionando prt ${PORT}`)
})