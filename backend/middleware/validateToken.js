
import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message:"Token Inexistente"});
    }else{
        jwt.verify(token, TOKEN_SECRET, (err,user)=>{
            if(err){
             return res.status(403).json({
                 message:"Token Invalido"
              });
            }else{
                console.log(user)
                next();
            }
    })
    }
}