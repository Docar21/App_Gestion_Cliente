import app from './app.js' 
import {db} from './db.js'

db();



app.listen(3001,()=>{
    console.log("Puerto 3001")   

})