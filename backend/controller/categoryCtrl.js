const CategoryTable = require('../models/categoryModel')
//functions to handle categories
const categoryCtrl = {
    getCategories: async (req, res) => {
        try {
            const category = await CategoryTable.find()
            res.json(category)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createCategory: async (req, res) => {
        try {
            const { name } = req.body
            const oldCategory = await CategoryTable.findOne({ name })
            if (oldCategory) return res.status(400).json({ msg: 'Cannot create duplicate category' })

            const newCategory = new CategoryTable({
                name
            })
            await newCategory.save()

            res.json({ msg: `new category ${name}` })



        } catch (err) {
            return res.status(500).json({ msg: err.message })


        }

    },
    deleteCategory: async (req, res) => {
        try {
            const sample = await CategoryTable.findByIdAndDelete(req.params.id)
            res.json({ msg: sample.name + " Category removed" })

        } catch (err) {
            return res.satus(500).json({ msg: err.message })
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { name } = req.body
            await CategoryTable.findOneAndUpdate({ _id: req.params.id }, { name })

            res.json({ msg: name + "is updated" })





        } catch (err) {
            return res.satus(500).json({ msg: err.message })


        }
    }
}

module.exports = categoryCtrl