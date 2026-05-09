const userPaths = {
  "/users/me": {
    get: {
      summary: "Get my account",
      tags: ["User"],
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
};

export default userPaths;
