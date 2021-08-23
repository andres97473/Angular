import { Request, response, Response } from 'express';

import pool from '../database';

class GamesController {

   public async list ( req: Request, res: Response ) {       
       const games = await pool.query('SELECT * FROM games');
       res.json(games);
   } 

   public getOne (req: Request, res: Response) {
    res.json({
        text:'Listando juego con id: ' + req.params.id 
    });
   }

   public async create (req: Request, res: Response): Promise<void> {
       //console.log(req.body);

       await pool.query('INSERT INTO games SET ?',[req.body]);
       
       res.json({
           message:'Juego guardado'
       });
   }

   public update (req: Request, res: Response) {
    res.json({
        text:'Actualizando juego con id: ' + req.params.id 
    });
   }

   public delete (req: Request, res: Response) {
    res.json({
        text:'Eliminando juego con id: ' + req.params.id 
    });
   }



}

const gamesController = new GamesController();
export default gamesController;