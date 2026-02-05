const express = require('express');
const router = express.Router();
const Product = require('../model/product')

router.get('', async function(req, res) {
    try {
        const products = await Product.find({});
        return res.json(products);
    } catch (err) {
        console.log(err);
        return res.status(422).send({errors: [{ title: 'Product error', detail: 'Product not found!'}]});
    }
})

router.get('/:productId', async function(req, res) {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId, {});
        return res.json(product);
    } catch (err) {
        console.log(err);
        return res.status(422).send({errors: [{ title: 'Product error', detail: 'Product not found!'}]});
    }
})
module.exports = router;