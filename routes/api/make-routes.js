const router = require('express').Router();
const { Make, Color, Year, MakeYear  } = require('../../models');


// GET /api/makes
router.get('/', (req, res) => {
     // Access our User model and run .findAll() method)
     Make.findAll(
       {
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
       }
     )
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
    .then((makeYears) => {
    // find all associated tags from ProductTag
    return MakeYear.findAll({ where: { make_id: req.params.id } });
  })
  .then((makeYears) => {
    // get list of current tag_ids
    const makeYearIds = makeYears.map(({ year_id }) => year_id);
    // create filtered list of new tag_ids
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

    // run both actions
    return Promise.all([
      MakeYear.destroy({ where: { id: makeYearsToRemove } }),
      MakeYear.bulkCreate(newMakeYears),
    ]);
  })
  .then((updatedMakeYears) => res.json(updatedMakeYears))
  .catch((err) => {
    // console.log(err);
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