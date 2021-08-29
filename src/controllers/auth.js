import Model from '../models/model';
import jwt from 'jsonwebtoken'
import { jwtPrivateKey } from '../settings';

const usersModel = new Model('users');

export const authPage = async (req, res) => {
    const {email, password} = req.body
    try {
        const data = await usersModel.select('id, email, password', ` WHERE email = '${email}'`);
        if(data != undefined){
            if(password == data.rows[0].password){
                jwt.sign({id: data.rows[0].id, email: data.rows[0].email}, jwtPrivateKey, {expiresIn: '24h'}, (err, token)=>{
                    if(err){
                        res.status(500).json({err: 'Falha interna'})
                    }else{
                        res.status(200).json({ token: token});
                    }
                })
            }
        }else{ 
            res.status(404).json({ erro: 'Usuario nao encontrado!'})
        }
    } catch (err) {
        res.status(400).json({ erro: err.stack });
    }
}