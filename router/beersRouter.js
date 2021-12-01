// déclarer un router express : créer un Router express en l'appelant : 
// express a un model .Router fait pour que l'on peut appeler

const beersRouter = require('express').Router();
const connection = require('../dbconfig')

beersRouter.get('/:name/:ph', (req, res) => {
    // tout est assynchrone
    // 'SELECT * FROM beers' c'est la requete que mysql 2 va renvoyer
    // .then attend que la promise renvoie un résultat

    connection
    .promise()
    .query('SELECT * FROM beers')
    .then(res => {
        res.json(res)
    })
})

// la librairie mysql2 renvoie les résultats en tableau

//rendre accessible le router a l'extérieur
module.exports = beersRouter;

