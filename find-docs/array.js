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