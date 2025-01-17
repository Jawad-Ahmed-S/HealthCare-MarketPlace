export default {
  name: 'medicine',
  title: 'Medicine',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'number' },
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'stock', title: 'Stock', type: 'number' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'variants', title: 'Variants', type: 'object', fields: [
        { name: 'mgOrG', title: 'Mg/G of Tablet', type: 'string' },
      ]
    }
  ]
};
