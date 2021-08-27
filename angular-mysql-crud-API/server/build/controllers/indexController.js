"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            games: 'The API games is /api/games',
            generos: 'The API generos is /api/generos'
        });
    }
}
exports.indexController = new IndexController();
