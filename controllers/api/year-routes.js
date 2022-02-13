<<<<<<< HEAD
const router = require('express').Router();
const { Year } = require('../../models');

// GET /api/years
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
Year.findAll()
 .then(dbYearData => res.json(dbYearData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err);
 });
});

=======
<<<<<<<< HEAD:controllers/api/year-routes.js
const router = require('express').Router();
const { Year, Make, MakeYear } = require('../../models');
// GET /api/years
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
Year.findAll({
  include:
    {
      model:Make,
      through: MakeYear,
    }
  })
 .then(dbYearData => res.json(dbYearData))
 .catch(err => {
   console.log(err);
   res.status(400).json(err);
 });
});
>>>>>>> feature/mix-routes-login
// GET /api/years/1
router.get('/:id', (req, res) => {
  Year.findOne({
    where: {
      id: req.params.id
<<<<<<< HEAD
=======
    },
    include:
    {
      model:Make,
      through: MakeYear
>>>>>>> feature/mix-routes-login
    }
  })
    .then(dbYearData => {
      if (!dbYearData) {
        res.status(404).json({ message: 'No manufacturer found with this id' });
        return;
      }
      res.json(dbYearData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// POST /api/year-1
router.post('/', (req, res) => {
<<<<<<< HEAD
  // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
    Year.create({
    manufacturing_year: req.body.manufacturing_year
  })
=======
  // expects {make_year: 'white'}
    Year.create(req.body)
>>>>>>> feature/mix-routes-login
    .then(dbYearData => res.json(dbYearData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put('/:id', (req, res) => {
<<<<<<< HEAD
  // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}

=======
  // expects {make_name: 'Honda', color-id: '1', price: '37000.00', stock: '9'}
>>>>>>> feature/mix-routes-login
  Year.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbYearData => {
      if (!dbYearData[0]) {
        res.status(404).json({ message: 'No year found with this id' });
        return;
      }
      res.json(dbYearData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
<<<<<<< HEAD

=======
>>>>>>> feature/mix-routes-login
router.delete('/:id', (req, res) => {
  Year.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbYearData => {
      if (!dbYearData) {
        res.status(404).json({ message: 'No  year found with this id' });
        return;
      }
      res.json(dbYearData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
========
// const router = require('express').Router();
// const { Year } = require('../../models');

// // GET /api/years
// router.get('/', (req, res) => {
//     // Access our User model and run .findAll() method)
// Year.findAll()
//  .then(dbYearData => res.json(dbYearData))
//  .catch(err => {
//    console.log(err);
//    res.status(500).json(err);
//  });
// });

// // GET /api/years/1
// router.get('/:id', (req, res) => {
//   Year.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbYearData => {
//       if (!dbYearData) {
//         res.status(404).json({ message: 'No manufacturer found with this id' });
//         return;
//       }
//       res.json(dbYearData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// // POST /api/year-1
// router.post('/', (req, res) => {
//   // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}
//     Year.create({
//     manufacturing_year: req.body.manufacturing_year
//   })
//     .then(dbYearData => res.json(dbYearData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// router.put('/:id', (req, res) => {
//   // expects {manufacture_name: 'Honda', model-id: '1', price: '37000.00', stock: '9'}

//   Year.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbYearData => {
//       if (!dbYearData[0]) {
//         res.status(404).json({ message: 'No year found with this id' });
//         return;
//       }
//       res.json(dbYearData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//   Year.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbYearData => {
//       if (!dbYearData) {
//         res.status(404).json({ message: 'No  year found with this id' });
//         return;
//       }
//       res.json(dbYearData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// module.exports = router;
>>>>>>>> feature/mix-routes-login:routes/api/year-routes.js
>>>>>>> feature/mix-routes-login
