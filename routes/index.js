const express = require('express');
const almacenRouter = require('../routes/almacen');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
        router.use('/almacen', almacenRouter);
}

module.exports = routerApi;