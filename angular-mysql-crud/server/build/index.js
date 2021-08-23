"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // si nos dan un puerto en un servicio en la nube se lo toma sino es asi toma el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        // utilizamos morgan para ver en consola las peticiones de los clientes GET,POST,PUT,DELETE
        this.app.use(morgan_1.default('dev'));
        // se utiliza para que angular haga las peticiones a nuestro servidor
        this.app.use(cors_1.default());
        // metodo json de expres para poder aceptar peticiones json del cliente
        this.app.use(express_1.default.json());
        // metodo urlencoded para poder utilizar un formulario desde html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server port ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
