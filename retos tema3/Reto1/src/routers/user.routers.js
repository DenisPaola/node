const {Router} = require('express');
const router = Router();
const usersCtrl = require('../controller/user.controller');

router.get('/', usersCtrl.getStart)

router.get('/bye', usersCtrl.getBye)

router.get('/user', usersCtrl.getUser);

router.get('/user/:nombre', usersCtrl.getUserParams);

router.post('/user', usersCtrl.postUser);

router.put('/user', usersCtrl.putUser);

router.delete('/user', usersCtrl.deleteUser);


module.exports = router;