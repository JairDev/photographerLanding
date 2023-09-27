const image = {
  name: "imageGallery",
  title: "ImageGallery",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [{ name: "imagename", title: "Imagenames", type: "string" }],
        },
      ],
    },
  ],
};

export default image;
