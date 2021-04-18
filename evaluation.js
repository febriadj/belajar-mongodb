/** @evaluation_operator */

use('belajar-mongo')

// select * from products where product_name like '%macbook%'
db.products.find({
  product_name: {
    $regex: /macbook/,
    $options: 'i' // regex flags -> case in-sensitive
  }
})

// select * from products where stock % 2 = 0
db.products.find({
  stock: { $mod: [2, 0] }
})

// select * from products where product_name is not null or category is not null
db.products.find({
  $jsonSchema: {
    required: ['product_name', 'category']
  }
})

// ------------------------------------------
// create text index on product_name
db.products.createIndex({
  product_name: 'text'
})

// select * from products where product_name like '%apple%' or product_name like '%keychron%'
db.products.find({
  $text: {
    $search: 'apple keychron'
  }
})
// ------------------------------------------