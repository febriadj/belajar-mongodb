/**
  @logical_operator
  sama dengan database pada umumnya, mongodb mempunyai logical operator seperti $and $or $nor dan $not
*/

use('belajar-mongo')

// select * from products where product_name = 'Keychron K4 V2 - 100 - Hot Swappable' and category = 'keychron'
db.products.find({
  $and: [
    { product_name:  'Keychron K4 V2 - 100 - Hot Swappable' },
    { category: 'keychron' }
  ]
})

// select * from products where product_name = 'Asus ZenBook 15 UX534' or category = 'earphone'
db.products.find({
  $or: [
    { product_name: 'Asus ZenBook 15 UX534' },
    { category: 'earphone' }
  ]
})

// select * from products where product_name != 'Asus ZenBook 15 UX534' and category != 'earphone'
db.products.find({
  $nor: [
    { product_name: 'Asus ZenBook 15 UX534' },
    { category: 'earphone' }
  ]
})

// select * from products where category != 'laptop'
db.products.find({
  category: { 
    $not: { $eq: 'laptop' } 
  }
})