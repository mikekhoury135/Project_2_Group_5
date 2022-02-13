const router = require('express').Router();
<<<<<<< HEAD
const { Make } = require('../../models');


// GET /api/makes
router.get('/', (req, res) => {
    console.log("retrieveing")
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

=======
const { Make, Color, Year, MakeYear  } = require('../../models');

// GET /api/makes
router.get('/', (req, res) => {
     // Access our User model and run .findAll() method)
  Make.findAll({
    include:
    [
      {
        model: Color,
      },
      {
        model: Year,
        through: MakeYear,
      }      
    ]
  }).then(dbMakeData => res.json(dbMakeData))
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
      },
      include:
    [
      {
        model: Color,
      },
      {
        model: Year,
        through: MakeYear
      }
    ]
    })
      .then(dbMakeData => {
        if (!dbMakeData) {
          res.status(404).json({ message: 'No make found with this id' });
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
    // expects {make_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
      Make.create(req.body)
      .then((make) => {
        if(req.body.yearIds) {
          const makeYearIdArr = req.body.yearIds.map((year_id) => {
            return {
              makeYear_id: make.id,
              year_id,
            };
          });
          return MakeYear.bulkCreate(makeYearIdArr);
        }
        res.status(200).json(make);
      })
      .then((makeYearIds) => res.status(200).json(makeYearIds))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// PUT /api/makes/1
router.put('/:id', (req, res) => {
    // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
    Make.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    .then((makeYear) => {
    return MakeYear.findAll({
      where:
      { make_id: req.params.id }
     });
  })
  .then((makeYears) => {
    // get list of current year_ids
    const makeYearIds = makeYears.map(({ year_id }) => year_id);
    // create filtered list of new year_ids
    const newMakeYears = req.body.tagIds
      .filter((year_id) => !makeYearIds.includes(year_id))
      .map((year_id) => {
        return {
          make_id: req.params.id,
          year_id,
        };
      });
    // figure out which ones to remove
    const makeYearsToRemove = makeYears
      .filter(({ year_id }) => !req.body.yearIds.includes(year_id))
      .map(({ id }) => id);
    return Promise.all([
      MakeYear.destroy({ where: { id: makeYearsToRemove } }),
      MakeYear.bulkCreate(newMakeYears),
    ]);
  })
  .then((updatedMakeYears) => res.json(updatedMakeYears))
  .catch((err) => {
    // if the error happen console.log(err);
    res.status(400).json(err);
  });
});
// DELETE /api/makes/1
router.delete('/:id', (req, res) => {
    Make.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbMakeData => {
        if (!dbMakeData) {
          res.status(404).json({ message: 'No  make found with this id' });
          return;
        }
        res.json(dbMakeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
>>>>>>> feature/mix-routes-login
module.exports = router;