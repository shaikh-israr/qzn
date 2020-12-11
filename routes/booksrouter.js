const express = require('express')
const router = express.Router()

const BooksController = require('../controllers/BooksController')
const upload = require('../middleware/upload')
const authenticate = require('../middleware/Authenticate') 

router.get('/', BooksController.indexbook)
router.get('/:bookId', BooksController.bookwithid)
router.post('/add', upload.single('image'), BooksController.addbook)
router.put('/update/:bookId', BooksController.updatedbook)
router.delete('/del/:bookId', BooksController.delbook)


module.exports = router