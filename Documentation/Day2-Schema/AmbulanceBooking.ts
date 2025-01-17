export default {
  name: 'ambulance',
  title: 'Ambulance',
  type: 'document',
  fields: [
    { name: 'registrationNumber', title: 'Ambulance Registration Number', type: 'string' },
    { name: 'category', title: 'Category', type: 'boolean' },
    { name: 'oxygen', title: 'Oxygen Available', type: 'boolean' },
    { name: 'paramedicStaff', title: 'Paramedic Staff Available', type: 'boolean' },
    { 
      name: 'customer', 
      title: 'Customer', 
      type: 'reference', 
      to: [{ type: 'customer' }] 
    },
    { 
      name: 'location', 
      title: 'Location Details', 
      type: 'object', 
      fields: [
        { name: 'zone', title: 'Zone', type: 'string' },
        { name: 'driver', title: 'Assigned Driver', type: 'string' },
        { name: 'coverageArea', title: 'Coverage Area', type: 'string' }
      ]
    }
  ]
};
