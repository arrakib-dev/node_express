const fs = require('fs')
const path = require('path')

const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json')

const getProductsFromFile = (callback) =>{
    fs.readFile(filePath, (error, fileContent)=>{
        let products = []
        if(error){
            callback(products)
        }
        products = JSON.parse(fileContent)
        callback(products)

    })
}

module.exports = class Product{
    constructor(title) {
        this.title = title
    }

    save(){

        getProductsFromFile((products)=>{
            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products),(error)=>{
                // console.log(error)
            })
        })


    }

    static fetchAll(callback){
        getProductsFromFile(callback)
    }
}