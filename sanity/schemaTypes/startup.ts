import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    // The 'to' property defines the type of document that this field references to
    // In this case, it's an 'author' document, which we've defined elsewhere in this schema
    // defineField({
    //   name: "author",
    //   type: "reference",
    //   to: { type: "author" },
    // }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) =>
        Rule.required(),
    }),
    // Define this if you are using markdown
    // defineField({
    //   name: "pitch",
    //   type: "markdown",
    // }),
  ],
});