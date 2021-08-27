"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GenerosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const generos = yield database_1.default.query('SELECT * FROM generos');
            res.json(generos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const generos = yield database_1.default.query('SELECT * FROM generos WHERE id_genero = ?', [id]);
            if (generos.length > 0) {
                return res.json(generos[0]);
            }
            res.status(404).json({ message: 'El Genero no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO generos SET ?', [req.body]);
            res.json({
                message: 'Genero guardado'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE generos SET ? WHERE id_genero = ?', [req.body, id]);
            yield database_1.default.query('UPDATE generos SET updated_at = NOW() WHERE id_genero = ?', [id]);
            res.json({ message: 'El Genero fue actualizado' });
            //console.log(req.body);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM generos WHERE id_genero = ?', [id]);
            res.json({ message: 'Genero borrado' });
        });
    }
}
const generosController = new GenerosController();
exports.default = generosController;
