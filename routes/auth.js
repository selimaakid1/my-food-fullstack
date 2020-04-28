const express = require('express')
const route = express.Router


router.get('/' , (req , res)=>{
    res.send('Get user logged in !  ')

})

router.post('/', (req , res)=>{
    res.send('login user')
})
module.exports = router