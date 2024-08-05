
import express from 'express'
const router = express.Router()
import { registrar, perfil } from '../controllers/veterinarioController.js'


router.post("/", registrar) //le pasamos la funcion que viene desde el controlador
router.get("/perfil", perfil)

export default router