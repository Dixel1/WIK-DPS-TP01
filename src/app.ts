//Importation depuis les librairies associées
import express from 'express';
/*
Utilisé pour un test
import { STATUS_CODES } from 'http';
*/

//Mise en variable des éléments "express" dans "app" et "VALEUR (= 3000) dans "PING_LISTEN_PORT"
const app = express();
const PING_LISTEN_PORT = 3000;

//Retourne les headers au format .JSON quand GET /ping est sollicité
app.get('/ping', (req, res) => {
    res.json(req.headers);
});

//Retourne l'erreur 404 pour toute requête (sauf sur GET /ping)
app.get('*', (req, res) => {
    res.status(404).end();
})

//Permet à Express d'écouter sur la valeur de port défini dans la variable "PING_LISTEN_PORT"
app.listen(PING_LISTEN_PORT, () => {
    return console.log(`Express écoute sur http://localhost:${PING_LISTEN_PORT}`);
});
