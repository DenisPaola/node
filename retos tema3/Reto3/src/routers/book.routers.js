const {Router} = require('express');
const router = Router();
const bookCtrls = require('../controller/book.controller');


router.get('/books/:id', bookCtrls.getBooks);
router.get('/books', bookCtrls.getBooks);

router.post('/books', bookCtrls.postBooks);
router.put('/books', bookCtrls.putBooks);
router.delete('/books', bookCtrls.deleteBooks);

module.exports = router; 