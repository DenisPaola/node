const {Router} = require('express');
const router = Router();
const bookCtrls = require('../controller/book.controller');

router.get('/', bookCtrls.getStart)

router.get('/book', bookCtrls.getBook);

router.post('/book', bookCtrls.postBook);

router.put('/book', bookCtrls.putBook);

router.delete('/book', bookCtrls.deleteBook);

module.exports = router; 