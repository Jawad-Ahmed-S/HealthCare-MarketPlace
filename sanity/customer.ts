export default {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Customer Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: Rule => Rule.required()
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: Rule => Rule.required()
    },
    {
      name: 'postalCode',
      type: 'number',
      title: 'ZipCode',
      validation: Rule => Rule.required()
    },{
      name: 'COD',
      type: 'string',
      title: 'COD',
      validation: Rule => Rule.required()
    },
    {
        name:'cartItems',
        title:'Cart Items',
        type: 'array',
        of :[{type:'reference', to :{type :'Product'}}]
    },
    {
        
        name:'total',
        title:'Total',
        type: 'number',

    },
    {
        // orderDate
        name:'orderDate',
        title:'Order Date',
        type: 'date',

    },
    {
        name: 'status',
        title: 'Order Status',
        type : 'string',
        options:{
            list : [
                {title:'Pending', value: 'pending'},
                {title:'Sucess', value: 'sucess'},
                {title:'Dispatch', value: 'Dispatch'},
            ],
            layout:'radio'
        },
        defaultValue :'pending',
    }
  ],
};

