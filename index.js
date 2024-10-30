const express = require('express');
const app = express();
const categories = require('./routers/R_categories.js');
const news = require('./routers/R_news.js')
const users = require('./routers/R_Users.js')
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')

app.use(express.json());
app.use('/api', categories);
app.use('/api', news);
app.use('/api', users);

// Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation untuk news and categories',
        },
    },
    apis: ['./routers/RS_users.js','./routers/RS_news.js', './routers/RS_categories.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Menjalankan server
const PORT = 4444;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 