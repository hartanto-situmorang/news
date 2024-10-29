const express = require('express');
const app = express();
const categories = require('./routers/R_categories.js');
const news = require('./routers/R_news.js')


app.use(express.json());
app.use('/api', categories);
app.use('/api', news);

// Menjalankan server
const PORT = 4444;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});