import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Swagger Schemas
import userSchema from "./schemas/user.schema.js";
import productSchema from "./schemas/product.schema.js";
import cartSchema from "./schemas/cart.schema.js";
import orderSchema from "./schemas/order.schema.js";

// Swagger Paths
import authPaths from "./paths/auth.paths.js";
import userPaths from "./paths/user.paths.js";
import productPaths from "./paths/product.paths.js";
import cartPaths from "./paths/cart.paths.js";
import orderPaths from "./paths/order.paths.js";

const swaggerDoc = swaggerJSDoc({
  definition: {
    openapi: "3.1.1",
    info: {
      title: "Manga Shop Application",
      version: "1.0.0",
      description: "API of Manga shop application",
    },
    components: {
      schemas: {
        User: userSchema,
        Product: productSchema,
        Cart: cartSchema,
        Order: orderSchema,
      },
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: { ...authPaths, ...userPaths, ...productPaths, ...cartPaths, ...orderPaths },
  },
  apis: [],
});

export function setupSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
