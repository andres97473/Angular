import { Request, Response } from 'express';


class IndexController {

   public index ( req: Request, res: Response ) {       
       res.json({
           games:'The API games is /api/games',
           generos:'The API generos is /api/generos'
        })
       
   } 
}

export const indexController = new IndexController();