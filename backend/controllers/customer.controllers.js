import db from '../db.js';
/*
export const getCustomer = async (req,res)=>{
    const [rows] = await db.query("call mostrar_clientes()");
    res.send(rows);
};
*/
const SelectAllElements = () =>{
    return new Promise((resolve, reject)=>{
        db.query('call mostrar_clientes()',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};


export const getCustomer= async (req, res, next)=>{
    try {
        const resultElements = await SelectAllElements();
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
};