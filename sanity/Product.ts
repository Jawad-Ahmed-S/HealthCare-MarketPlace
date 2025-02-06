export default{
  name: 'Product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      title: 'Poster',
      name: 'poster',
      type: 'image', 
      options: {
      hotspot: true,
      },
      validation: (Rule) => Rule.required().uri({
      allowRelative: false,
      scheme: ['http', 'https']
      })
    },
    {
      name: 'productname',
      type: 'string',
      title: 'Product Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: Rule=> Rule.required()
    },
    {
      name: 'price', 
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required().min(0) // Non-negative validation
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
     {
      name: 'packet_size',
      title: 'Packet Size',
      type: 'string'
    },
    {
          name: 'ProductId',
          type: 'number',
          title: 'Product ID',
          validation: (Rule) => Rule.required()
    }
  ],
};
