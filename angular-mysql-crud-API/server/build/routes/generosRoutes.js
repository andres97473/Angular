"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generosController_1 = __importDefault(require("../controllers/generosController"));
class GenerosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', generosController_1.default.list);
        this.router.get('/:id', generosController_1.default.getOne);
        this.router.post('/', generosController_1.default.create);
        this.router.put('/:id', generosController_1.default.update);
        this.router.delete('/:id', generosController_1.default.delete);
    }
}
const generosRoutes = new GenerosRoutes();
exports.default = generosRoutes.router;
