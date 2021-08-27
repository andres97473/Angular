import { Request, response, Response } from 'express';

import pool from '../database';

class GenerosController {

   public async list ( req: Request, res: Response ) {       
       const generos = await pool.query('SELECT * FROM generos');
       res.json(generos);
   } 

   public async getOne (req: Request, res: Response): Promise<any> {
       const { id } = req.params;
       const generos = await pool.query('SELECT * FROM generos WHERE id_genero = ?', [id]);
       if( generos.length > 0){
           return res.json(generos[0]);
       }       
       res.status(404).json({message:'El Genero no existe'});         
   }

   public async create (req: Request, res: Response): Promise<void> {
    //console.log(req.body);

    await pool.query('INSERT INTO generos SET ?',[req.body]);
    
    res.json({
        message:'Genero guardado'
    });
}

public async update (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE generos SET ? WHERE id_genero = ?', [req.body, id]);
    await pool.query('UPDATE generos SET updated_at = NOW() WHERE id_genero = ?', [ id ]);  
    res.json({message:'El Genero fue actualizado'});
    //console.log(req.body);
    
}

public async delete (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM generos WHERE id_genero = ?', [id]);
    res.json({message:'Genero borrado'});
}


}

const generosController = new GenerosController();
export default generosController;