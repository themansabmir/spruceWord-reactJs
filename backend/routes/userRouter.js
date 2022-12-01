const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')



router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/logout', userCtrl.logout)
router.get('/refreshtoken', userCtrl.refreshToken)
router.get('/infor', auth, authAdmin, userCtrl.getUser)


 

module.exports = router 