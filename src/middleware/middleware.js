import jwt from 'jsonwebtoken'
import { jwtPrivateKey } from '../settings';

export const authMiddleware = (req, res, next) => {
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const token = authToken.split(' ')[1];
        jwt.verify(token, jwtPrivateKey, (err,data)=>{
            if(err){
                console.log("oi")
                res.status(401).json({err: "Token não é válido!"});
            }else{
                res.status(200);
                req.token = token;
                req.loggedUser ={id: data.id, email: data.email};
                next();
            }
        })
    }else{
        res.status(401).json({err: "Nenhum token enviado!"});
    }
}