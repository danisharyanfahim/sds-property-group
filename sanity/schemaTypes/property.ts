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
  ],
}
