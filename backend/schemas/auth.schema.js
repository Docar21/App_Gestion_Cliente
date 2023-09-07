import {z} from 'zod'

export const clienteSchema=z.object({
    Ci: z.number({
        required_error: 'Ci is required'
    }),
    Nombre: z.string({
        required_error: 'Nombre is required'
    }),
    App: z.string({
        required_error: 'App is required'
    }),
    Apm: z.string({
        required_error: 'Apm is required'
    }),
    Fecha_nacimiento: z.date({
        required_error: 'Fecha_nacimiento is required'
    }),
    Edad: z.number({
        required_error: 'Edad is required'
    }),
    Nacionalidad: z.string({
        required_error: 'Nacionalidad is required'
    }),
    Telefono: z.number({
        required_error: 'Telefono is required'
    }),
    Direccion: z.string({
        required_error: 'Direccion is required'
    }),
    Correo: z.string({
        required_error: 'Correo is required'
    })
    .email({
        message:'Invalid email'
    }),
    Fecha_recepcion: z.date({
        required_error: 'Fecha_recepcion is required'
    }),

});

export const registerSchema=z.object({
    Ci: z.string({
        required_error: 'Ci is required'
    }),
    Nombre: z.string({
        required_error: 'Nombre is required'
    }),
    App: z.string({
        required_error: 'App is required'
    }),
    Apm: z.string({
        required_error: 'Apm is required'
    }),
    Username: z.string({
        required_error: 'Username is required'
    }),
    Pasword: z.string({
        required_error: 'Pasword is required'
    }),

});


export const loginSchema=z.object({
    Username: z.string({
        required_error: 'Username is required'
    }),
    Pasword: z.string({
        required_error: 'Pasword is required'
    }),

});

