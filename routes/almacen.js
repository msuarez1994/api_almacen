const express = require('express');

const EntradaService = require('../service/entrada.service');

const router = express.Router();
const service = new EntradaService();
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