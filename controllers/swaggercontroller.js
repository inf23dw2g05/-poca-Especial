const config = require("../config/env");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API documentation for the project",
    contact: { name: "Your Team" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  paths: {
    "/Users": {
      get: {
        tags: ["UsersController"],
        summary: "Retrieve Users",
        operationId: "retrieveUsers",
        responses: {
          200: {
            description: "Array of Users model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Users",
                  },
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      post: {
        tags: ["UsersController"],
        summary: "Create User",
        operationId: "createUsers",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a User model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
    },
    "/Users/{ID}": { // Updated
      get: {
        tags: ["UsersController"],
        summary: "Retrieve User",
        operationId: "retrieveUser",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
            description: "ID of the user to retrieve", // Added description
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      put: {
        tags: ["UsersController"],
        summary: "Update User",
        operationId: "updateUsers",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "User PUT success",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      delete: {
        tags: ["UsersController"],
        summary: "Delete User",
        operationId: "deleteUsers",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
    },
    "/Products": { // Added for Products
      get: {
        tags: ["ProductController"],
        summary: "Retrieve Products",
        operationId: "retrieveProducts",
        responses: {
          200: {
            description: "Array of Products model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Products",
                  },
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "ProductController",
      },
      post: {
        tags: ["ProductController"],
        summary: "Create Product",
        operationId: "createProduct",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Product model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Products",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "ProductController",
      },
    },
    "/Products/{ID}": { // Added for Products/{ID}
      get: {
        tags: ["ProductController"],
        summary: "Retrieve Product",
        operationId: "retrieveProduct",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
            description: "ID of the product to retrieve", // Added description
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Products",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductController",
      },
      put: {
        tags: ["ProductController"],
        summary: "Update Product",
        operationId: "updateProduct",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Product PUT success",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductController",
      },
      delete: {
        tags: ["ProductController"],
        summary: "Delete Product",
        operationId: "deleteProduct",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductController",
      },
    },
    "/ProductCategories": {
      get: {
        tags: ["ProductCategoryController"], // Updated
        summary: "Retrieve Product Categories",
        operationId: "retrieveProductCategories",
        responses: {
          200: {
            description: "Array of ProductCategories model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ProductCategories",
                  },
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "ProductCategoryController", // Updated
      },
      post: {
        tags: ["ProductCategoryController"], // Updated
        summary: "Create Product Category",
        operationId: "createProductCategory",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductCategories",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a ProductCategory model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductCategories",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "ProductCategoryController", // Updated
      },
    },
    "/ProductCategories/{ID}": { // Updated
      get: {
        tags: ["ProductCategoryController"], // Updated
        summary: "Retrieve Product Category",
        operationId: "retrieveProductCategory",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductCategories",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductCategoryController", // Updated
      },
      put: {
        tags: ["ProductCategoryController"], // Updated
        summary: "Update Product Category",
        operationId: "updateProductCategory",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductCategories",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "ProductCategory PUT success",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductCategoryController", // Updated
      },
      delete: {
        tags: ["ProductCategoryController"], // Updated
        summary: "Delete Product Category",
        operationId: "deleteProductCategory",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "ProductCategoryController", // Updated
      },
    },
    "/Cart": {
      get: {
        tags: ["CartController"],
        summary: "Retrieve Cart Items",
        operationId: "listCartItems",
        parameters: [
          {
            name: "ID", // Updated
            in: "query",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Cart model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Cart",
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "Cart not found",
          },
        },
        "x-swagger-router-controller": "CartController",
      },
      post: {
        tags: ["CartController"],
        summary: "Add Product to Cart",
        operationId: "addProductToCart",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cart",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Product added to cart",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Cart",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "CartController",
      },
    },
    "/Cart/{ID}": { // Updated
      get: {
        tags: ["CartController"],
        summary: "Retrieve Cart Item",
        operationId: "retrieveCartItem",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Cart",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "CartController",
      },
      put: {
        tags: ["CartController"],
        summary: "Update Cart Item",
        operationId: "updateCartItem",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cart",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Cart item updated",
            content: {
              "application/json": {
                schema: {
                  description: "Cart item PUT success",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "CartController",
      },
      delete: {
        tags: ["CartController"],
        summary: "Remove Product from Cart",
        operationId: "removeProductFromCart",
        parameters: [
          {
            name: "ID", // Updated
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "ID not found", // Updated
          },
        },
        "x-swagger-router-controller": "CartController",
      },
    },
  },
  components: {
    schemas: {
      Users: {
        title: "Users",
        required: ["UserName","Email","Pass"],
        type: "object",
        properties: {
          ID: { // Updated
            type: "integer",
            format: "int64",
          },
          UserName: {
            type: "string",
          },
          Email: {
            type: "string",
          },
          Pass:{
            type: "string",
          }
        },
        additionalProperties: false,
        example: {
          ID: 1, // Updated
          UserName: "John Doe",
          Email: "john.doe@example.com",
          Pass:"password"
        },
      },
      Cart: {
        title: "Cart",
        required: ["ID", "productId"], // Updated
        type: "object",
        properties: {
          ID: { // Updated
            type: "integer",
            format: "int64",
          },
          productId: {
            type: "integer",
            format: "int64",
          },
        },
        additionalProperties: false,
        example: {
          ID: 1, // Updated
          productId: 101,
        },
      },
      ProductCategories: {
        title: "ProductCategories",
        required: ["ID", "CategoryName"], // Updated
        type: "object",
        properties: {
          ID: { // Updated
            type: "integer",
            format: "int64",
          },
          CategoryName: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          ID: 1, // Updated
          CategoryName: "Electronics",
        },
      },
      Products: { // Adicionado para o schema de Products
        title: "Products",
        required: ["ID", "ProductName", "Price"], // Campos obrigatórios
        type: "object",
        properties: {
          ID: {
            type: "integer",
            format: "int64",
          },
          ProductName: {
            type: "string",
          },
          Price: {
            type: "number",
            format: "float",
          },
        },
        additionalProperties: false,
        example: {
          ID: 1,
          ProductName: "Sample Product",
          Price: 19.99,
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;