const router = require('express').Router();
const { Make } = require('../../models');


// GET /api/makes
router.get('/', (req, res) => {
     // Access our User model and run .findAll() method)
     Make.findAll()
  .then(dbMakeData => res.json(dbMakeData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// GET /api/makes/1
router.get('/:id', (req, res) => {
    Make.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbMakeData => {
        if (!dbMakeData) {
          res.status(404).json({ message: 'No manufacturer found with this id' });
          return;
        }
        res.json(dbMakeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/make-1
router.post('/', (req, res) => {
    // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
      Make.create({
      manufacture_name: req.body.manufacture_name,
      model_id: req.body.model_id,
      price: req.body.price,
      stock: req.body.stock
    })
      .then(dbMakeData => res.json(dbMakeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
  
    Make.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbMakeData => {
        if (!dbMakeData[0]) {
          res.status(404).json({ message: 'No manufacture found with this id' });
          return;
        }
        res.json(dbMakeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/makes/1
// DELETE /api/makes/1
router.delete('/:id', (req, res) => {
    Make.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbMakeData => {
        if (!dbMakeData) {
          res.status(404).json({ message: 'No  manufacture found with this id' });
          return;
        }
        res.json(dbMakeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;