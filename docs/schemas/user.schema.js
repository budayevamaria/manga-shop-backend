const userSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "User's id in ObjectId format",
      example: "69fdce...",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
      example: "Password123!",
    },
  },
};

export default userSchema;
