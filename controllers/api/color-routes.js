const router2 = require('express').Router();
const { Color } = require('../../models');


// GET /api/makes
router2.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Color.findAll()
        .then(dbColorData => res.json(dbColorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// GET /api/makes/1
router2.get('/:id', (req, res) => {
    Color.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(dbColorData => {
            if (!dbColorData) {
                res.status(404).json({ message: 'No color found with this id' });
                return;
            }
            res.json(dbColorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/make-1
router2.post('/', (req, res) => {
    // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
    Color.create({
            color_name: req.body.color_name
        })
        .then(dbColorData => res.json(dbColorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/users/1
router2.put('/:id', (req, res) => {
    // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}

    Color.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(dbColorData => {
            if (!dbColorData[0]) {
                res.status(404).json({ message: 'No color found with this id' });
                return;
            }
            res.json(dbColorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/makes/1
// DELETE /api/makes/1
router2.delete('/:id', (req, res) => {
    Color.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbColorData => {
            if (!dbColorData) {
                res.status(404).json({ message: 'No  color found with this id' });
                return;
            }
            res.json(dbColorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router2;