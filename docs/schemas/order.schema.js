const orderSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Order's id in ObjectId format",
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
        quantity: {
          type: "number",
          minimum: 1,
          default: 1,
        },
        price: {
          type: "number",
          example: 12.9, //?
        },
      },
    },
    totalPrice: {
      type: "number",
      example: 12.9,
    },
  },
};

export default orderSchema;
