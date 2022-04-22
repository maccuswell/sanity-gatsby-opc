// organization.js
export default {
  name: 'certification',
  type: 'document',
  title: 'Certification',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Certification name',
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Logo",
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: "excerpt",
      type: "simplePortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, or when people share your post in social media.",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the certification",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
    name: "description",
    type: "simplePortableText",
    title: "Description",
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describe the certification.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
    },
  ],
};
