// organization.js
export default {
  name: 'organization',
  type: 'document',
  title: 'Organization',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Organization name',
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
        "Some frontends will require a slug to be set to be able to show the organization",
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
      description: 'Add keywords that describe the organization.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
    },
  ],
};
