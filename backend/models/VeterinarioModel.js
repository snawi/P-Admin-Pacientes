
import mongoose from "mongoose";

const VeterinarioShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono:{
        type: String,
        default: null, //no es obligatorio
        trim: true
    },
    web:{
        type:String,
        default:null //no es obligatorio
    },
    token: {
        type: String
    },
    confirmado:{
        type: Boolean,
        fefault: false
    },

})

const Veterinario = mongoose.model("Veterinario", VeterinarioShema) // le colocamos un nombre
export default Veterinario