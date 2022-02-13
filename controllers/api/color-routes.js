<<<<<<< HEAD
const router = require('express').Router();
const { Color } = require('../../models');


// GET /api/makes
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Color.findAll()
        .then(dbColorData => res.json(dbColorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// GET /api/makes/1
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
=======
<<<<<<<< HEAD:controllers/api/color-routes.js
const router = require('express').Router();
const { Color, Make } = require('../../models');
// GET /api/makes
router.get('/', (req, res) => {
     // Access our User model and run .findAll() method)
Color.findAll({
    include:
    [
      {
        model: Make,
      }
    ]
  })
  .then(dbColorData =>
    res.json(dbColorData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});
// GET /api/Color/1
router.get('/:id', (req, res) => {
    Color.findOne({
      where: {
        id: req.params.id
      },
      include:
      [
        {
          model: Make
        }
      ]
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
========
// const router = require('express').Router();
// const { Color } = require('../../models');


// // GET /api/makes
// router.get('/', (req, res) => {
//      // Access our User model and run .findAll() method)
// Color.findAll()
//   .then(dbColorData => res.json(dbColorData))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });


// // GET /api/makes/1
// router.get('/:id', (req, res) => {
//     Color.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbColorData => {
//         if (!dbColorData) {
//           res.status(404).json({ message: 'No color found with this id' });
//           return;
//         }
//         res.json(dbColorData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// // POST /api/make-1
// router.post('/', (req, res) => {
//     // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
//       Color.create({
//       color_name: req.body.color_name
//     })
//       .then(dbColorData => res.json(dbColorData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// // PUT /api/users/1
// router.put('/:id', (req, res) => {
//     // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}

//     Color.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbColorData => {
//         if (!dbColorData[0]) {
//           res.status(404).json({ message: 'No color found with this id' });
//           return;
//         }
//         res.json(dbColorData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// // DELETE /api/makes/1
// // DELETE /api/makes/1
// router.delete('/:id', (req, res) => {
//     Color.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbColorData => {
//         if (!dbColorData) {
//           res.status(404).json({ message: 'No  color found with this id' });
//           return;
//         }
//         res.json(dbColorData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// module.exports = router;
>>>>>>>> feature/mix-routes-login:routes/api/color-routes.js
>>>>>>> feature/mix-routes-login
