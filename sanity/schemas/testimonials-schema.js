const testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name_client",
      title: "Name_Client",
      type: "string",
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "string",
    },
    {
      name: "service",
      title: "Service",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default testimonials;
