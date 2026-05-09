const cartPaths = {
  "/cart": {
    get: {
      summary: "Get cart items",
      tags: ["Cart"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "List of all items in cart",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cart",
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
    delete: {
      summary: "Clear cart",
      tags: ["Cart"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Cart cleared",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cart",
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
  "/cart/add": {
    post: {
      summary: "Add product to cart",
      tags: ["Cart"],
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["productId", "quantity"],
              properties: {
                productId: {
                  type: "string",
                  example: "69fe0894031f699e2d310b0f",
                },
                quantity: {
                  type: "number",
                  example: 2,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Added product",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
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
  "/cart/{productId}": {
    delete: {
      summary: "Delete cart item",
      tags: ["Cart"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "productId",
          in: "path",
          required: true,
          description: "Product id (ObjectId)",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Cart item deleted",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
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
    patch: {
      summary: "Update cart item quantity",
      tags: ["Cart"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "productId",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["quantity"],
              properties: {
                quantity: {
                  type: "number",
                  minimum: 1,
                  example: 3,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Quantity updated",
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

export default cartPaths;
