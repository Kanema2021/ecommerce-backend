const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag }]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  try {
    const tagData = await Tag.create(req.body);
    restore.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get()






  // Tag.findAll({
  //   include:
  //   {
  //     model: Product
  //   }
  // })

  //   .then(tagData =>
  //     res.json(tagData))
  //   .catch(err => {
  //     console.log(err)
  //     res.status(500).json(err)
  //   }

  //  });



  // find a single tag by its `id`
  // be sure to include its associated Product data
//   Tag.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: ['id', 'tag_name'],
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'catgeory_id']

//       }
//     ]
//   })

//     .then(tagData => res.json(tagData))
//     .catch(err => {
//       console.log(err)
//       res.status(500).json(err)

//     });


// });

// router.post('/', (req, res) => {
//   // create a new tag
//   Tag.create({
//     tag_name: req.body.tag_name
//   })
//     .then(tagData => res.json(tagData))
//     .catch(err => {
//       console.log(err)
//       res.status(500).json(err)
//     })
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
//   Tag.Update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
    // .then(tagData => {
    //   if (!tagData) {
    //     res.status(404).json({ messag: 'Id does not exist!' });
    //     return;
    //   }
    //   res.json(tagData);
    // })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err)
//     })
// });



// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

// module.exports = router;
