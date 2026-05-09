const productPaths = {
  "/products": {
    get: {
      summary: "Get all products",
      tags: ["Products"],
      responses: {
        200: {
          description: "List of all products",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Product" },
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
      summary: "Create new product",
      tags: ["Products"],
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "author", "chapters", "volumes", "cost", "image"],
              properties: {
                title: {
                  type: "string",
                  example: "One Piece",
                },
                author: {
                  type: "string",
                  example: "Oda, Eiichiro",
                },
                chapters: {
                  type: "number",
                  example: 366,
                },
                volumes: {
                  type: "number",
                  example: 18,
                },
                status: {
                  type: "string",
                  example: "finished",
                },
                cost: {
                  type: "number",
                  example: 12.9,
                },
                image: {
                  type: "string",
                  example: "https://myanimelist.net/images/manga/2/253146.jpg",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Product successfully created",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/products/{id}": {
    get: {
      summary: "Get product by id",
      tags: ["Products"],
      parameters: [
        {
          name: "id",
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
          description: "One product",
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
      summary: "Update product",
      tags: ["Products"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Product id (ObjectId)",
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
              required: ["title", "author", "chapters", "volumes", "cost", "image"],
              properties: {
                title: {
                  type: "string",
                  example: "One Piece",
                },
                author: {
                  type: "string",
                  example: "Oda, Eiichiro",
                },
                chapters: {
                  type: "number",
                  example: 366,
                },
                volumes: {
                  type: "number",
                  example: 18,
                },
                status: {
                  type: "string",
                  example: "finished",
                },
                cost: {
                  type: "number",
                  example: 12.9,
                },
                image: {
                  type: "string",
                  example: "https://myanimelist.net/images/manga/2/253146.jpg",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Product updated",
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
    delete: {
      summary: "Delete product",
      tags: ["Products"],
      parameters: [
        {
          name: "id",
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
          description: "Product deleted",
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
};

export default productPaths;
