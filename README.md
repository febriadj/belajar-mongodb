# Belajar MongoDB
## Insert Documents
~~~javascript
/** 
  insert into articles (product_name, category, stock, created_at) 
  values ('Apple MacBook Pro MF841ID/A', laptop, 9, '<datetime>');
*/
db.products.insertOne({
  product_name: 'Apple MacBook Pro MF841ID/A',
  category: 'laptop',
  stock: 9,
  created_at: Date()
})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/insert.js">Lihat Lebih Details</a>

## Find Documents
~~~javascript
// select * from products where product_name = 'Apple MacBook Pro MF841ID/A'
db.products.findOne({
  product_name: 'Apple MacBook Pro MF841ID/A'
})

// select * from products where category = 'laptop' 
db.products.find({
  category: 'laptop'
})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find.js">Lihat Lebih Details</a>

## Comparison Operator
~~~javascript
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

// select * from products where category in('earphone', 'keychron)
db.products.find({
  category: { 
    $in: ['earphone', 'keychron'] 
  }
})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/comparison.js">Lihat Lebih Details</a>

## Logical Operator
~~~javascript
// select * from products where product_name = 'Keychron K4 V2 - 100 - Hot Swappable' and category = 'keychron'
db.products.find({
  $and: [
    { product_name:  'Keychron K4 V2 - 100 - Hot Swappable' },
    { category: 'keychron' }
  ]
})

// select * from products where category != 'laptop'
db.products.find({
  category: { 
    $not: { $eq: 'laptop' } 
  }
})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/logical.js">Lihat Lebih Details</a>

## Evaluation Operator
~~~javascript
// select * from products where product_name like '%macbook%'
db.products.find({
  product_name: {
    $regex: /macbook/,
    $options: 'i' // regex flags -> case in-sensitive
  }
})

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
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/evaluation.js">Lihat Lebih Details</a>

## Element Operator
~~~javascript
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
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/element.js">Lihat Lebih Details</a>

## Update Documents
~~~javascript
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
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/element.js">Lihat Lebih Details</a>