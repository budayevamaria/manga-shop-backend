const orderPaths = {
  "/orders": {
    get: {
      summary: "Get all orders",
      tags: ["Orders"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "List of all orders",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Order",
                },
              },
            },
          },
        },
        404: {
          description: "Not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create order from cart",
      tags: ["Orders"],
      security: [{ BearerAuth: [] }],
      responses: {
        201: {
          description: "Order created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
          },
        },
        400: {
          description: "Cart is empty",
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },

  "/orders/{id}": {
    get: {
      summary: "Get order by id",
      tags: ["Orders"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Order id (ObjectId)",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "One order",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
          },
        },
        404: {
          description: "Not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default orderPaths;
