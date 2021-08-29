import { getRepository  } from "typeorm";
import { Request, Response } from "express";
import { User } from '../entity/User';

class AuthController {
    static login = async ( req: Request, res: Response )=> {
        const { username, password } = req.body;
        
        if( !(username && password )){
            return res.status(400).json({message:'User name & password are required!'});
        }

        const userRepository = getRepository(User);
        let user: User;

        try{
            // user = await userRepository.findOneOrFail({ where:{username:username}});
            user = await userRepository.findOneOrFail({ where:{username}});
        }
        catch(e){
            return res.status(400).json({message:'Username or Password incorecct!'})
        }

        res.send(user);
    };

}

export default AuthController;