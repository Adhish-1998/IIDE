const { sql } = require('../Models/blogModel')

const createBlog = async function (req, res) {
    try {
        //<-------Blog Creation----------->//
        let data = req.body;
        console.log(data)
        sql.query('INsert INTO blog SET ?', data, (err, result, fields) => {
            return res.status(201).send({ status: true, data: result });
        })

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};


const getBlog = async function (req, res) {
    try {
        //<------- Get Blogs----------->//
        sql.query('select * from blog', (err, result) => {
            return res.status(201).send({ status: true, data: result });
        })

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};


const updatedBlog = async function (req, res) {
    try {
        //<-------Update Blog----------->//
        const data = [req.body.title, req.body.subcategory, "Hey"]
        sql.query("UPDATE blog SET Title = ?, subcategory= ? WHERE Body = ?", data, (err, result, fields) => {
            return res.status(201).send({ status: true, data: result });
        })

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};




const deleteBlog = async function (req, res) {
    try {
        //<-------Delete Blog----------->//
        //console.log(req.body.title)
        const data = [req.body.body]
        sql.query("DELETE FROM blog WHERE Body = ?", data, (err, result, fields) => {
            return res.status(201).send({ status: true, data: result });
        })


    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};


module.exports = {
    createBlog,
    getBlog,
    updatedBlog,
    deleteBlog
}