import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Routes
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import generosRoutes from './routes/generosRoutes';

class Server {

    public app: Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();

    }

    config(): void {

        // si nos dan un puerto en un servicio en la nube se lo toma sino es asi toma el puerto 3000
        this.app.set('port', process.env.PORT || 3000 );

        // utilizamos morgan para ver en consola las peticiones de los clientes GET,POST,PUT,DELETE
        this.app.use(morgan('dev'));

        // se utiliza para que angular haga las peticiones a nuestro servidor
        this.app.use(cors());

        // metodo json de expres para poder aceptar peticiones json del cliente
        this.app.use(express.json());

        // metodo urlencoded para poder utilizar un formulario desde html
        this.app.use(express.urlencoded({extended:false}));

    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/generos', generosRoutes);

    }

    start(): void {

        this.app.listen(this.app.get('port'), () =>{
            console.log('Server port '+ this.app.get('port'));
        });

    }



}

const server = new Server();
server.start();