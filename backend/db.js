import mysql from "mysql";


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"bd_gestion_cliente"
})
export default db
/*
export const db = async()=>{
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
} */

 
