const authPaths = {
  "/auth/register": {
    post: {
      summary: "Register new customer",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  example: "Emma",
                },
                email: {
                  type: "string",
                  example: "example@gmail.com",
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
          description: "Customer successfully registered",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Новый покупатель был успешно зарегистрирован",
                  },
                  user: {
                    $ref: "#/components/schemas/User",
                  },
                  token: {
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZDQwZGQ4ODdiYzg3N2Q5YTA5OTQy...",
                  },
                },
              },
            },
          },
        },
        409: {
          description: "Email already used",
        },
        422: {
          description: "Validation failed",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login customer",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "example@gmail.com",
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
          description: "Successfull login, returns JWT",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZDQwZGQ4ODdiYzg3N2Q5YTA5OTQy...",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid email or password",
        },
        422: {
          description: "Validation failed",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default authPaths;
