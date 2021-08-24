import { Request, response, Response } from 'express';

import pool from '../database';

class GamesController {

   public async list ( req: Request, res: Response ) {       
       const games = await pool.query('SELECT * FROM games');
       res.json(games);
   } 

   public async getOne (req: Request, res: Response): Promise<any> {
       const { id } = req.params;
       const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
       if( games.length > 0){
           return res.json(games[0]);
       }       
       res.status(404).json({message:'El juego no existe'});         
   }

   public async create (req: Request, res: Response): Promise<void> {
       //console.log(req.body);

       await pool.query('INSERT INTO games SET ?',[req.body]);
       
       res.json({
           message:'Juego guardado'
       });
   }

   public async update (req: Request, res: Response): Promise<void> {
       const { id } = req.params;
       await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
       await pool.query('UPDATE games SET updated_at = NOW() WHERE id = ?', [ id ]);  
       res.json({message:'El juego fue actualizado'});
       //console.log(req.body);
       
   }

   public async delete (req: Request, res: Response): Promise<void> {
       const { id } = req.params;
       await pool.query('DELETE FROM games WHERE id = ?', [id]);
       res.json({message:'juego borrado'});
   }



}

const gamesController = new GamesController();
export default gamesController;