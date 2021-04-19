use('belajar-mongo')

// update products set stock = stock + 1
db.products.updateMany(
  { _id: ObjectId('607b8023d6340a09088e6977') },
  {
    $inc: {
      stock: 1 // increment
    }
  }
)

// update products set stock = stock + 1
db.products.updateMany(
  { _id: ObjectId('607b8023d6340a09088e6977') },
  {
    $inc: {
      stock: - 1 // decrement
    }
  }
)

// alter table products change stock items int
db.products.updateOne(
  { _id: ObjectId('607b8023d6340a09088e6977') },
  {
    $rename: {
      stock: 'items'
    }
  }
)

// alter table products change pruduct_name name tinytext
db.products.updateMany(
  {}, // update field product_name di semua dokumen
  {
    $rename: {
      product_name: 'name'
    }
  }
)