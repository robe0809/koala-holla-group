const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM koala';
    pool.query(queryText)
        .then((result) => {
            console.log('results: ', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })
});

router.post('/', (req,res) => {
   
    const queryText = 'INSERT INTO koala(name, gender, age, ready_to_transfer, notes)VALUES($1, $2, $3, $4, $5)';
    pool.query(queryText, [req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes])
        .then((result) => {
            console.log('successfully posted');
            
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })

});

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM koala WHERE id= $1';
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('results: ', req.params.id);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })
})

module.exports = router;