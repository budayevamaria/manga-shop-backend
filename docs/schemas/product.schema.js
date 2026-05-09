const productSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Product's id in ObjectId format",
      example: "69fdce...",
    },
    title: {
      type: "string",
    },
    authors: {
      type: "array",
      items: {
        type: "string",
      },
    },
    chapters: {
      type: "number",
    },
    volumes: {
      type: "number",
    },
    status: {
      type: "string",
      example: "Finished",
    },
    price: {
      type: "number",
    },
    image: {
      type: "string",
      example: "https://myanimelist.net/images/manga/3/258224.jpg",
    },
  },
};

export default productSchema;
