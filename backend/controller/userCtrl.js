require('dotenv').config()
const clients = require('../models/userModel')
const hash = require('bcrypt')
const jwt = require('jsonwebtoken')

//importing functions




const userCtrl = {
    register: async (req, res) => {
        try {
            //taking user info for registration
            const { name, email, password, gender, age, phone, role } = req.body
            const user = await clients.findOne({ email })
            if (user) return res.status(400).json({ msg: "The Email already exist" })

            if (password.length < 8) return res.status(400).json({ msg: "Password is too small" })

            //generating hash password
            const hashPassword = await hash.hash(password, 10)
            //creating user in DB
            const newUser = new clients({
                name, email, password: hashPassword, gender, age, phone, role
            })
            // saving user
            await newUser.save()
            //generating jwt token
            const accessToken = createAccessToken({ id: newUser._id })
            const refreshToken = refreshAccessToken({ id: newUser._id })
            res.cookie('cookie', refreshToken, {
                httpOnly: true,
                path: '/user/refreshtoken'

            })

            res.json({ accessToken: accessToken, refresh: refreshToken })
        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }



    },
    refreshToken: (req, res) => {
        try {
            const rfToken = req.cookies.cookie

            if (!rfToken) return res.status(400).json({ msg: "Please Login Or register " })

            jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ msg: "Please Login Or register " })
                const accessToken = createAccessToken({ id: user._id })

                res.json({ user, accessToken })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }



    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await clients.findOne({ email })
            if (!user) return res.status(400).json({ msg: "Email or Password is incorrect" })
            const isMatch = await hash.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Email or password is incorrect" })


            const accessToken = createAccessToken({ id: user._id })
            const refreshToken = refreshAccessToken({ id: user._id })
            res.cookie('cookie', refreshToken,{
                httpOnly:true,
                path: 'user/refreshtoken'
            })



            res.json({accessToken})


        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req,res)=>{
        try {
            res.clearCookie('cookie', { path: 'user/refreshtoken' })

            return res.json({msg:"Logout hogaya bhai"})
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }

    },
    getUser: async ( req,res)=>{
        try {
            const user= await clients.findById(req.user.id).select('-password')
            if(!user) res.status(400).json({msg:"No user found"})

            res.json(user)
  
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    }


}


const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
}

const refreshAccessToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3d' });
}




module.exports = userCtrl