import db from '../db.js';

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


export const getCustomer= (req, res, next)=>{
    //console.log(res.send('Clientes'))
    try {
        const resultElements = SelectAllElements();
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
};