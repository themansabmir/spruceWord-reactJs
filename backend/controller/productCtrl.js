const ProductTable = require('../models/productModel')


const productCtrl = {
    getProduct: async (req, res) => {
        try {
            const products = await ProductTable.find()
            res.json(products)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            const { product_id, name, price, description, images, category } = req.body
            if (!images) return res.status(400).json({ msg: "No image selected" })
            const oldProduct = await ProductTable.findOne({ product_id })
            if (oldProduct) return res.status(400).json({ msg: "product already exists" })

            const newProduct = new ProductTable({
                product_id, name: name.toLowerCase(), price, description, category, images
            })
            await newProduct.save()
            res.json(newProduct)

        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }

    },
    deleteProduct: async (req, res) => {
        try {
            const product = await ProductTable.findByIdAndDelete(req.params.id)
            res.json({ msg: "Product Deleted" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { name, price, description, images, category } = req.body
            await ProductTable.findOneAndUpdate({ _id: req.params.id }, { name, price, description, images, category })
            res.json({ msg: "Product Updated " })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = productCtrl