// déclarer un router express : créer un Router express en l'appelant : 
// express a un module .Router que l'on peut appeler

const beersRouter = require('express').Router();
const beerModel = require('../models/beers');

// const connection = require('../dbconfig')  => mis dans models/beer

beersRouter.get('/', (req, res) => {
    beerModel
    .findAll(req.query.search)
    .then(([result]) => {
        res.json(result)
    });

    // tout est assynchrone
    // 'SELECT * FROM beer' c'est la requete que mysql 2 va renvoyer via la table beer dans db beers
    // .then attend que la promise renvoie un résultat

    // connection.... intégré à Models/beers : 

    // connection
    // .promise()
    // .query('SELECT * FROM beer')
    // .then(res => {
    //     res.json(res)
    // })
})

beersRouter.get('/:id', (req, res) => {
    beerModel
        .findOneById(req.params.id)
        .then(([beer]) => {
        res.json(beer)
        })

        // then ([beer] => permet de déstructurer et de récupérer seulement les infos de beer qui nous intéressent)
})

// la librairie mysql2 renvoie les résultats en tableau json : utiliser res.json(res)

//rendre accessible le router a l'extérieur
module.exports = beersRouter;

