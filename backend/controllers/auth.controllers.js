import db from '../db.js';

export const register = async (req,res)=>{
    const {Ci, Nombre, App, Apm,Username, Pasword}=req.body;
    try {
        const {userSaved} =await db.query("call crear_usuario(?,?,?,?,?,?)",[Ci, Nombre, App, Apm,Username, Pasword])
        //console.log(Ci, Nombre, App, Apm,Username, Pasword);
        res.send({userSaved});
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