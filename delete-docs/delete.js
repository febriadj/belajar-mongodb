use('belajar-mongo')

// delete from products where _id = 607b8023d6340a09088e6977
db.products.deleteOne({ 
  _id: ObjectId('607b8023d6340a09088e6977') 
})

// delete from products
db.products.deleteMany()
db.products.deleteMany({})