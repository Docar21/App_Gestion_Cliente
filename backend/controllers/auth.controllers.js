import db from '../db.js';

export const register = async (req,res)=>{
    const {Ci, Nombre, App, Apm,Username, Pasword}=req.body;
    try {
        const {userSaved}=await db.query("call crear_usuario(?,?,?,?,?,?)",[Ci, Nombre, App, Apm,Username, Pasword])
        //await db.query("INSERT INTO persona (Ci, Nombre, App, Apm,created_at) VALUES (?,?,?,?, NOW())",[Ci, Nombre, App, Apm])
        //console.log(Ci, Nombre, App, Apm,Username, Pasword);
        res.json({userSaved});
    } catch (error) {
        console.log(error);
        
    }
   
    
};
export const login = (req,res)=>{};


export const getCustomer = async (req,res)=>{
    const {rows} = await db.query("select * from cliente");
    console.log(Ci, Nombre, App, Apm,Username, Pasword);
    res.send({rows});
    
};