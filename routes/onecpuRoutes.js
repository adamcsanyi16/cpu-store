const express = require('express');
const {
    getCPU
} = require('../controllers/onecpuController');
const router = express.Router();

router.get('/:id', getCPU);
//router.delete('/', deleteBook);
//router.get('/modosit/:id', updateBook);

module.exports = router;