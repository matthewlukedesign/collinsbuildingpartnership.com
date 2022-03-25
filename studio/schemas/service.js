import { GrTools } from "react-icons/gr";

export default {
  name: "service",
  title: "Services",
  type: "document",
  icon: GrTools,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sections",
      title: "Sections",
      type: "sections",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
