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
        status: {
          type: "string",
        },
      },
    },
    totalPrice: {
      type: "number",
      example: 12.9,
    },

    status: {
      type: "string",
      enum: ["created", "paid", "shipped", "delivered"],
      example: "created",
    },
  },
};

export default orderSchema;
