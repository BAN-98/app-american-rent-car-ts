import { z } from "zod";

const loginSchema = z.object({
    email: z.string({ required_error: "Email es requerido" }).email({ message: "Email invalido" }),
    password: z.string({ required_error: "La contraseña es requerida" }).min(6)
})


const registerSchema = z.object({
    email: z.string({ required_error: "Email es requerido" }).email({ message: "Email invalido" }),
    password: z.string({ required_error: "La contraseña es requerida" }).min(6, { message: "La contraseña debe tener minimo 6 caracteres" }),
    user_name: z.string({ required_error: "Nombre de usuario es requerido" }).min(3, { message: "El nombre de usuario debe tener minimo 3 caracteres" }),
    address: z.string({required_error: "La direccion es requerida" }),
    phone: z.string({ required_error: "El telefono es requerido" }),
});

export { loginSchema, registerSchema };


