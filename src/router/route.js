
const express = require('express')
const router = express.Router()
const blogController = require("../controller/blogController")
const authorController = require("../controller/authorController")
const {Authentication} = require("../middleware/authentication")
const {autherisation} = require('../middleware/autherisation')

//=========================// PHASE -1 //===================================

router.post('/blogs',Authentication, blogController.createBlog)

router.post('/authors', authorController.createauther)

router.get('/blogs',Authentication, blogController.getData)

router.put("/blogs/:blogId",Authentication,autherisation, blogController.updateBlog)

router.delete('/blogs/:blogId',Authentication,autherisation, blogController.DELETEdata)

router.delete('/blogs',Authentication,autherisation, blogController.deleteunpublished)

router.post('/login', authorController.login) 


//                     <===========> error handling route <=================>


router.all("/*",function(req,res){
    return res.status(404).send({status:false,msg:"path is not found"})
})
//===============================================================================//

module.exports = router
