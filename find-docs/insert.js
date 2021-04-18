use('belajar-mongo')

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

/**
  insert into articles (product_name, category, stock, created_at) 
  values 
    ('Asus ZenBook 15 UX534', 'laptop', 12, '<datetime>'),
    ('Keychron K4 V2 - 100 - Hot Swappable', 'keychron', 25, '<datetime>');
*/
db.products.insertMany([
  {
    product_name: 'Asus ZenBook 15 UX534',
    category: 'laptop',
    stock: 12,
    created_at: Date()
  },
  {
    product_name: 'Keychron K4 V2 - 100 - Hot Swappable',
    category: 'keychron',
    stock: 25,
    created_at: Date()
  }
])

// dengan query insert, kedua cara diatas dapat dilakukan
db.products.insert({
  product_name: 'Knowledge Zenith KZAS16 - 8BA - Earphone with Mic',
  category: 'earphone',
  stock: 14,
  details: {
    color: ['Blue', 'Black', 'White'],
    type: 'in-ear'
  },
  created_at: Date()
})