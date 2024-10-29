const express  = require('express');
const  router  = express.Router();
const  C_users=  require('../controllers/C_user.js');


// gET users
router.get('/users',C_users.getUsers);
// PoST berita
router.post('/users',C_users.createUsers);
// udpaste berita
router.put('/users/:id',C_users.updateUsers);
// Delete   berita
router.delete('/users/:id',C_users.deleteUsers);
// login
router.post('/login', C_users.login);

module.exports =  router;