const adminData = require("../routes/admin");

const Product = require('../models/Product')


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const title =  req.body.title

    const addProduct = new Product(title)

    addProduct.save()

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {

    Product.fetchAll((products)=>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });

    })


}