use('belajar-mongo')

// select * from products where product_name = 'Apple MacBook Pro MF841ID/A'
db.products.findOne({
  product_name: 'Apple MacBook Pro MF841ID/A'
})

// select * from products where category = 'laptop' 
db.products.find({
  category: 'laptop'
})

// select * from products
db.products.find()

// select * from products where created_at order by desc
db.products.find().sort({ created_at: - 1 })

/** 
  perbedaan dari find dan findOne adalah hasilnya atau outputnya
  @find akan menghasilkan sebuah objek didalam array sedangkan 
  @findOne hanyak menghasilkan sebuah object
*/