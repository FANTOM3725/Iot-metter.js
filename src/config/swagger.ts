import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "IoT Device API",
            version: "1.0.0",
            description: "API для управления умной лампой"
        }
    },
    apis: ["**/routes/*.ts"]
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);