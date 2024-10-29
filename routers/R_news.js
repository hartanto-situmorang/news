const express  = require('express');
const  router  = express.Router();
const  C_news =  require('../controllers/C_news.js');

// gET News
router.get('/news',C_news.getnews);
// PoST berita
router.post('/news',C_news.createNews);
// udpaste berita
router.put('/news/:id',C_news.udpatenews);
// Delete   berita
router.delete('/news/:id',C_news.deletedNews);

module.exports =  router;