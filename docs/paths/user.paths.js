const userPaths = {
  "/users/me": {
    get: {
      summary: "Get my account",
      tags: ["Users"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Returned user successfully",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/users": {
    get: {
      summary: "Get all users",
      tags: ["Users"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "List of all users",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/User" },
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
      summary: "Create new user",
      tags: ["Users"],
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "email", "password"],
              properties: {
                name: {
                  type: "string",
                  example: "Aruzhan",
                },
                email: {
                  type: "string",
                  example: "aruzhan@gamil.com",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User successfully created",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/users/{id}": {
    patch: {
      summary: "Update users",
      tags: ["Users"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "User id (ObjectId)",
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
              required: ["name", "email", "password"],
              properties: {
                name: {
                  type: "string",
                  example: "Aruzhan",
                },
                email: {
                  type: "string",
                  example: "aruzhan@gamil.com",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
      summary: "Delete user",
      tags: ["Users"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "User id (ObjectId)",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "User deleted",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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

export default userPaths;
