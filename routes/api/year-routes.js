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