import db from '../db.js';

const registerUser = (req) =>{
    return new Promise((resolve, reject)=>{
        const {Ci, Nombre, App, Apm,Username, Pasword}=req;
        db.query("call crear_usuario(?,?,?,?,?,?)",[Ci, Nombre, App, Apm,Username, Pasword],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

const validarUsuario = (req) =>{
    return new Promise((resolve, reject)=>{
        const {Username, Pasword}=req;
        db.query("call Login(?,?)",[Username, Pasword],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

export const register= async (req, res, next)=>{
    try {
        const resultElements = await registerUser(req.body);
        res.status(200).json({elements: resultElements}); 
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
};

export const login= async (req, res, next)=>{
    try {
        const resultElements = await validarUsuario(req.body);
        res.status(200).json({elements: resultElements[0]});
        
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
};
