use('belajar-mongo')

/** 
  update products set product_name = 'Asus VivoBook 14 A420', stock = 16
  where product_name = 'Asus ZenBook 15 UX534'
*/
db.products.updateOne(
  { product_name: 'Asus ZenBook 15 UX534' },
  { 
    $set: {
      product_name: 'Asus VivoBook 14 A420',
      stock: 16
    } 
  }
)

/** 
  update products set stock = 12 where 
  product_name = 'Apple MacBook Pro MF841ID/A' and category = 'earphone'
*/
db.products.updateMany(
  {
    $or: [
      { product_name: 'Apple MacBook Pro MF841ID/A' },
      { category: 'earphone' }
    ]
  },
  { 
    $set: { 
      stock: 12 
    } 
  }
)

/**
  update products set stock = 20 where
  _id = '607b8023d6340a09088e6977' and stock > 16
*/
db.products.update(
  {
    $and: [
      { 
        _id: { $not: { $eq: ObjectId('607b8023d6340a09088e6977') } }
      },
      {
        stock: { $gt: 16 }
      }
    ]
  },
  {
    $set: {
      stock: 20
    }
  }
)