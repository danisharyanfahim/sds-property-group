export default {
  name: 'property',
  type: 'document',
  title: 'Property',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Property Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Link',
      options: {
        source: 'name',
      },
    },
    {
      name: 'size',
      type: 'number',
      title: 'Size in Sqft',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Property Type',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price in INR',
    },
    {
      name: 'rooms',
      type: 'number',
      title: 'Rooms if Applicable',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'area',
      type: 'string',
      title: 'Area Within City',
    },
    {
      name: 'averageRent',
      type: 'number',
      title: 'Average Rent Rate',
    },
    {name: 'overview', type: 'text', title: 'Overview'},
    {
      name: 'amenities',
      type: 'array',
      title: 'Amenities',
      of: [
        {
          name: 'amenity',
          type: 'string',
          title: 'Amenity',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Property Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Property Image',
        },
      ],
    },
  ],
}
