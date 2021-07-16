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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/insert-docs/insert.js">Lihat Lebih Details</a>

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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/find.js">Lihat Lebih Details</a>

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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/comparison.js">Lihat Lebih Details</a>

## Logical Operator
~~~javascript
/** 
  select * from products where 
  product_name = 'Keychron K4 V2 - 100 - Hot Swappable' and category = 'keychron'
*/
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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/logical.js">Lihat Lebih Details</a>

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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/evaluation.js">Lihat Lebih Details</a>

## Array Query
~~~javascript
use('belajar-mongo')

// select * from products where color between 'Yellow' and 'White'
db.products.find({
  'details.color': {
    $all: ['Yellow', 'White']
  }
})

db.products.find({
  'details.color': { $size: 3 }
})

// select * from products where color in ('Blue',  'Silver')
db.products.find({
  'details.color': {
    $elemMatch: {
      $in: ['Blue', 'Silver']
    }
  }
})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/array.js">Lihat Lebih Details</a>

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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/element.js">Lihat Lebih Details</a>

## Modifier Query
~~~javascript
// select * from products limit 3 offset 1
db.products.find().limit(3).skip(1)

// select count(*) from products
db.products.find().count()

// select * from products order by stock asc
db.products.find().sort({ stock: 1 })
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/find-docs/modifier.js">Lihat Lebih Details</a>

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
  _id != '607b8023d6340a09088e6977' and stock > 16
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
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/update-docs/update.js">Lihat Lebih Details</a>

## Update Operator
~~~javascript
// update products set stock = stock + 1
db.products.updateMany(
  { _id: ObjectId('607b8023d6340a09088e6977') },
  {
    $inc: {
      stock: 1 // increment
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
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/update-docs/update-operator.js">Lihat Lebih Details</a>

## Delete Documents
~~~javascript
// delete from products where _id = 607b8023d6340a09088e6977
db.products.deleteOne({ 
  _id: ObjectId('607b8023d6340a09088e6977') 
})

// delete from products
db.products.deleteMany({})
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/delete-docs/delete.js">Lihat Lebih Details</a>

## Bulk Write Query
~~~javascript
db.products.bulkWrite([
  {
    /**
      update product set product_name = 'Dell Inspiron 13-5391',
      category = 'laptop', stock = stock + 4 where _id = '607fef2de086491b680c19e8'
    */
    updateOne: {
      filter: {
        _id: { $eq: ObjectId('607fef2de086491b680c19e8') }
      },
      update: {
        $set: {
          product_name: 'Dell Inspiron 13-5391',
          category: 'laptop'
        },
        $inc: { 
          stock: 4 
        }
      }
    }
  },
  {
    // delete from products where _id = '607fef2de086491b680c19e9'
    deleteOne: {
      filter: {
        _id: ObjectId('607fef2de086491b680c19e9')
      }
    }
  }
])
~~~
<a href="https://github.com/febriadj/belajar-mongodb/blob/master/bulk-write/bulkwrite.js">Lihat Lebih Details</a>