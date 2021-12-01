// connexion à la DB
const connection = require('../dbconfig');

// fonction pour récupérer toutes les bières en BD
const findAll = (search) => {

    let request = 'SELECT ';
 
    if (search) {
        // concatène request avec le reste de la string :
        // ? renvoie au tableau de dépendance. = `WHERE name LIKE %${search}%`
        request += `* FROM beer WHERE name LIKE '?'`;
    } else {
        request += `* FROM beer`;
    }
    

    return connection.promise().query(request, [`%${search}%`]);
}

// fonction pour récupérer une bière en fonction de son ID :

const findOneById = (id) => {
    // !!! à l'attaque d'injection SQL 
    // On pourrait faire : return connection.promise().query(`SELECT * FROM beer WHERE id= ?`, [id]);
    // mais dangereux. Il faut ajouter des ? pour préparer la requete et donner la donnée en array
    // sql remplace les ? par les valeurs associées dans le tableau
    return connection.promise().query(`SELECT * FROM beer WHERE id= ?`, [id]);
}

module.exports = {
    findAll,
    findOneById,
}
