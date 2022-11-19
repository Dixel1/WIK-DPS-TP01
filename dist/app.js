"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importation des mudules depuis les librairies associées
const express_1 = __importDefault(require("express"));
//Mise en variable des éléments "express" et "PING_LISTEN_PORT"
const app = (0, express_1.default)();
const PING_LISTEN_PORT = 3000;
//Retourne les headers au format .JSON quand GET /ping est sollicité
app.get('/ping', (req, res) => {
    res.json(req.headers);
});
//Retourne l'erreur 404 pour toute requête (sauf sur GET /ping)
app.get('*', (req, res) => {
    res.status(404).end();
});
//Permet à Express d'écouter sur le port séléctionné
app.listen(PING_LISTEN_PORT, () => {
    return console.log(`Express écoute sur http://localhost:${PING_LISTEN_PORT}`);
});
//res.json(req.headers)
//# sourceMappingURL=app.js.map