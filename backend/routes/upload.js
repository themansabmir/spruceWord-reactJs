require('dotenv').config()
const fs = require('fs')
const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_Key,
    api_secret: process.env.API_Secret,

})

// handling uplaod and delete images
router.post('/upload',  (req, res) => {
    try {
        const file = req.files.file
        cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "3dproject" }, async (err, result) => {
            if (err) throw err;
            removeTmp(file.tempFilePath)
            res.json({ public_id: result.public_id, url: result.url })
        })
    } catch (err) {
        return res.json({ msg: err.message })
    }
})
router.post('/destroy', auth, authAdmin, (req, res) => {
    try {
        const { public_id } = req.body

        cloudinary.v2.uploader.destroy(public_id, (err, result) => {
            if (err) throw err
            res.json({ msg: "Image deleted" })
        })
    } catch (err) {
        return res.json({ msg: err.message })
    }

})



const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err
    })


}

module.exports = router
