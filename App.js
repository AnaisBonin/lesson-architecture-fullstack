//
//
// DEFINITION DU SERVEUR EXPRESS
//
//

const express = require('express');
const app = express();

// 
//
// .ENV : définit les infos liées à l'environnement
//
//

// Créer un fichier .env à la source pour stocker toutes les variables/infos uniquement liées à l'environnement de travail.  
// ex: port = 8000
// Pour récup le .env : executer dans le terminal => "npm i dotenv" qui va chercher ce qui est dispo dans le fichier .env
//
// Dans App.js, écrire :
// require.('dotenv').config() : donne accès aux variables d'environnement
// process.env.nomdevariable => ex: process.env.PORT   => remplace const port = 8000;

require('dotenv').config()
const port = process.env.PORT;


//
//
// ROUTES
//
//
// Connect l'app au router pour la route /beers

const beersRouter = require('./router/beersRouter')

// déclarer des routes : 
// route: /beers qui envoie "hey beers"

app.use('/beers', beersRouter);

// cela remplace :
// app.get('/beers', (req, res) => {
//     res.send("hey beers");
// })

// // récupère l'ID de l'URL donnée en params
// app.get('/beers/:id', (req, res) => {
//     res.send(`hey beer # ${req.params.id} `);
// })

//
//
// APPEL ET DEFINITION DES ROUTES
//
//
// Dès que l'app reçoit l'URL 8000/beers, elle appelle beersRouter pour le gérer
// Quand on définit ('/beers), l'URL 8000/beers va renvoyer vers le router qui lui va définir potentiellement des params supplémentaires, sans avoir à respécifier /beers et commencer directement avec '/:name/:id'. Dans l'URL, on écrira alors 8000/beers/nom/5
// beers sera lue par l'app, et les params par le router

app.use('/beers', beersRouter);

// on peut déclarer toutes les autres routes ici qui vont etre déclarées dans ./router/ 



//
//
// LANCER UN SERVEUR
//
//

app.listen(port, () => {
    //callback appelée pour dire si ça fonctionne ou non
    console.log('serveur is running')
})
