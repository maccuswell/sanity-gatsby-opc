// action.js
export default {
  name: 'diy',
  type: 'document',
  title: 'DIY',
  fields: [
    {
      name: 'diy',
      type: 'string',
      title: 'DIY',
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Image",
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
        "Some frontends will require a slug to be set to be able to show this item.",
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
      description: 'Add keywords that describe the DIY project.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
    },
  ],
};
