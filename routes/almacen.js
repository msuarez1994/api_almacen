const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('ruta de almacen');
});

router.post('/', (req, res)=>{
    const body = req.body;
    res.json({
        message: 'creado',
        data: body
    });
});

module.exports = router;