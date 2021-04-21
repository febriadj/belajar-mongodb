use('belajar-mongo')

db.products.bulkWrite([
  {
    /** 
      insert into products (product_name, category, stock, created_at)
      values ('Asus Vivo AiO V200IB', 'pc', 8, '<datetime>')
    */
    insertOne: {
      document: {
        product_name: 'Asus Vivo AiO V200IB',
        category: 'pc',
        stock: 8,
        created_at: Date()
      }
    }
  },
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