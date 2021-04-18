/** @element_operator */

use('belajar-mongo')

// select * from products where product_name is null
db.products.find({
  product_name: {
    $exists: false
  }
})

// di mongodb, kita dapat membandingkan tipe data value
db.products.find({
  category: {
    $type: ['int', 'string']
  }
})