const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
Category.findAll ({
  attributes:['id', 'category_name'],
  include: { 
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock', 'catgeory_id']

  }

}
  
);
// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne ({

  })

}
);


router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});
})

module.exports = router;
