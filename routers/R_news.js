const express  = require('express');
const  router  = express.Router();
const  C_news =  require('../controllers/C_news.js');
const authMiddleware = require('../auth/middleware');

// gET News
router.get('/news',C_news.getnews);
// PoST berita
router.post('/news',authMiddleware,C_news.createNews);
// udpaste berita
router.put('/news/:id',authMiddleware,C_news.udpatenews);
// Delete   berita
router.delete('/news/:id',authMiddleware,C_news.deletedNews);

module.exports =  router;