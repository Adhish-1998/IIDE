const express = require('express')
const router = express.Router()
const { createBlog, getBlog, updatedBlog, deleteBlog } = require('../Controller/blogController')

//-------------For Customer------------------//

router.post('/createBlog', createBlog)
router.get('/getBlog', getBlog)
router.put('/updatedBlog', updatedBlog)
router.delete('/deleteBlog', deleteBlog)


//-------------For Invaild URL------------------//
router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Page Not Found !!!"
    })
})


router.get('/', (req,res) => {
    res.send({message : "Welcome to Home Page"})
})

module.exports = router