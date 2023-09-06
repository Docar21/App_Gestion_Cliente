import db from '../db.js';
import { createAccessToken } from '../libs/jwt.js';

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


const idUsuario = (req) =>{
        return new Promise((resolve, reject)=>{
        const {Username, Pasword}=req;
        db.query("call Buscar_idUsuario(?,?)",[Username, Pasword],  (error, elements)=>{
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
        db.query("call Buscar_idUsuario(?,?)",[Username, Pasword],  (error, elements)=>{
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
        res.json({elements: resultElements}); 
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
};


export const login= async (req, res, next)=>{
    try {
        const resultElements = await validarUsuario(req.body);
        //res.json({resultElements});
        if(!(typeof(resultElements[0][0])==='undefined')) {  
            
            const token = await createAccessToken({id:resultElements[0][0].Id_usuario});
            
            res.cookie("token",token);
            res.json({resultElements});
            console.log(token);
            //console.log(resultElements[0][0].Id_usuario);
        }else{
            console.log("Error de Autenticacion")
        }
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
};



export const logout= async (req, res, next)=>{
    res.cookie('token','', {
        expires:new Date(0),
    });
    return res.sendStatus(200);
};

