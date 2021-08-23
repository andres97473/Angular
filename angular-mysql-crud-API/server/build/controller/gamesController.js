"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    index(req, res) {
        res.send('Hello GamesRoutes');
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
