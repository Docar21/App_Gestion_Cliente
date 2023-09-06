import mysql from "mysql";

export const db= async()=>{
    try {
       await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"bd_gestion_cliente"
        })
        console.log("Db is Connected")
    } catch (error) {
        console.log(error)
    }
} 


 
