
//necesitamos el modelo para interactuar con los datos
import Veterinario from "../models/VeterinarioModel.js"



const registrar = async(req, res) => {
/* const {nombre, email, password }= req.body */
/* console.log(nombre)
console.log(email)
console.log(password) */

try {
    const veterinario = new Veterinario(req.body)
    const veterinarioGuardado = await veterinario.save()
    res.json(veterinarioGuardado)
} catch (error) {
    console.log(error)
}

    
}










const perfil = (req, res) => {
    res.send({msg: "desde el perfil"})
}






export {
    registrar,
    perfil
}