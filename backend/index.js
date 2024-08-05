
import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './config/db.js';
import router from './routes/veterinarioRoutes.js';

const app = express();

//leer datos desde postman al servidor
app.use(express.json())

//llamos dotenv para leer variables de entorno
dotenv.config()

//llamamos la funcion de la bd
conectarDB()


//configuracion rutas
app.use("/api/veterinarios", router )





//configuracion puerto
const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`servidor funcionando prt ${PORT}`)
})