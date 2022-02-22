export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "contacts",
      title: "Contact",
      type: "array",
      of: [
        {
          name: "contact",
          title: "Contact",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
  ],
};
