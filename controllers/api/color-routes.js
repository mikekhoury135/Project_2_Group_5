// GET /api/Color/1
const router = require('express').Router();
const { Make, Color } = require('../../models');


router.get('/:id', (req, res) => {
    Color.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Make
            }]
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
// POST /api/color
router.post('/', (req, res) => {
    // expects {color_name: 'black'}
    Color.create(req.body)
        .then(dbColorData => res.json(dbColorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {car_name: 'honda'}
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
router.delete('/:id', (req, res) => {
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
module.exports = router;