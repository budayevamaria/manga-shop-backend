const cartSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Cart's id in ObjectId format",
      example: "69fdce...",
    },
    user: {
      $ref: "#/components/schemas/User",
    },
    items: {
      type: "object",
      properties: {
        product: {
          $ref: "#/components/schemas/Product",
        },
      },
      quantity: {
        type: "number",
        minimum: 1,
        default: 1,
      },
    },
  },
};

export default cartSchema;
