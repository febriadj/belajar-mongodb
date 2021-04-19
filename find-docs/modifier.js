use('belajar-mongo')

// select * from products limit 2
db.products.find().limit(2)

// select * from products limit 3 offset 1
db.products.find().limit(3).skip(1)

// select count(*) from products
db.products.find().count()

// select count(product_name) from products
db.products.find().count('product_name')

// select * from products order by created_at desc
db.products.find().sort({ created_at: - 1 })

// select * from products order by stock asc
db.products.find().sort({ stock: 1 })