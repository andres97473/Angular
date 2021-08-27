import { Router } from 'express';


import  generosController  from '../controllers/generosController'

class GenerosRoutes {

    public router: Router = Router();

    constructor(){

        this.config();

    }

    config(): void {
        this.router.get('/', generosController.list );
        this.router.get('/:id', generosController.getOne );
        this.router.post('/', generosController.create );
        this.router.put('/:id', generosController.update );
        this.router.delete('/:id', generosController.delete );            
    }

}

const generosRoutes = new GenerosRoutes();
export default generosRoutes.router;