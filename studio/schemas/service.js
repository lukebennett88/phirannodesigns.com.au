export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    // Info for the carousel on the home page
    {
      name: 'carouselBold',
      title: 'Bold text in title',
      type: 'string',
    },
    {
      name: 'carouselThin',
      title: 'Thin text in title',
      type: 'string',
    },
    {
      name: 'carouselTagline',
      title: 'Tagline for carousel',
      type: 'string',
    },
    {
      name: 'carouselImage',
      title: 'Image for carousel',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // Info for the service page
    // First section
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'firstSectionHeadingBold',
      title: 'Bold text in first heading',
      type: 'string',
    },
    {
      name: 'firstSectionHeadingThin',
      title: 'Thin text in first heading',
      type: 'string',
    },
    {
      name: 'firstSectionCopy',
      title: 'First section copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'firstSectionTaglineBold',
      title: 'First section tagline bold',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'firstSectionTaglineThin',
      title: 'First section tagline thin',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // Second section
    {
      name: 'secondSectionImage',
      title: 'Second section image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondSectionImageCaptionHeading',
      title: 'Second section image caption heading',
      type: 'string',
    },
    {
      name: 'secondSectionImageCaptionCopy',
      title: 'Second section image caption copy',
      type: 'string',
    },
    {
      name: 'secondSectionTwoColumns',
      title: 'Should second section have two columns?',
      type: 'boolean',
    },
    {
      name: 'secondSectionHeadingBold',
      title: 'Bold text in second heading',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'secondSectionHeadingThin',
      title: 'Thin text in second heading',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'secondSectionCopy',
      title: 'Second section copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
