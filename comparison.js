/** 
  @comparison_operator
  comparison operator pada mongodb digunakan untuk membandingkan value dokumen
*/

use('belajar-mongo')

// select * from products where product_name = 'Apple MacBook Pro MF841ID/A'
db.products.findOne({
  product_name: {
    $eq: 'Apple MacBook Pro MF841ID/A'
  }
})

// select * from products where stock >= 12
db.products.find({
  stock: { $gt: 12 }
})

// select * from products where stock >= 12
db.products.find({
  stock: { $gte: 12 }
})

// select * from products where stock < 14
db.products.find({
  stock: { $lt: 14 }
})

// select * from products where stock < 14
db.products.find({
  stock: { $lte: 14 }
})

// select * from products where category in('earphone', 'keychron)
db.products.find({
  category: { 
    $in: ['earphone', 'keychron'] 
  }
})

// select * from products where category not in('earphone', 'keychron)
db.products.find({
  category: { 
    $nin: ['earphone', 'keychron'] 
  }
})