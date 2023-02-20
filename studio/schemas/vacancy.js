export default {
  name: "vacancy",
  title: "Vacancy",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      options: {
        layout: "dropdown",
        list: ["PDF", "External"],
      },
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      hidden: ({ document }) => document?.link != "External",
    },
    {
      name: "pdf",
      title: "PDF",
      type: "file",
      hidden: ({ document }) => document?.link != "PDF",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
