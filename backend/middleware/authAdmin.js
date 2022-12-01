const clients = require('../models/userModel')

const authAdmin = async (req, res, next) => {
    try {
        const user = await clients.findById(req.user.id);
        if (user.role === 0) return res.status(400).json({ msg: "Admin access denied" })


        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })

    }

}

module.exports= authAdmin