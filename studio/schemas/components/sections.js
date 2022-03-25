export default {
  name: "sections",
  title: "Sections",
  type: "array",
  of: [
    {
      name: "images",
      title: "Images",
      type: "object",
      fields: [
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "video",
              title: "Video",
              type: "mux.video",
            },
          ],
        },
      ],
      preview: {
        select: {
          media: "images.0",
        },
        prepare(value) {
          const { media } = value;
          return {
            title: "Images",
            media: media,
          };
        },
      },
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "blockContent",
        },
      ],
      preview: {
        select: {
          blocks: "text",
        },
        prepare(value) {
          const block = (value.blocks || []).find(
            (block) => block._type === "block"
          );
          return {
            title: block
              ? block.children
                  .filter((child) => child._type === "span")
                  .map((span) => span.text)
                  .join("")
              : "No title",
          };
        },
      },
    },
  ],
};
