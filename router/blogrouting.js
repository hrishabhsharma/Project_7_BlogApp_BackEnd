const { home, bollydata, techdata, hollydata, fitnessdata, fooddata, singledata } 
        = require("../controller/blogcontroller")
const blog = require("express").Router()

blog.get("/",home)
blog.get("/bollywood",bollydata)
blog.get("/technology",techdata)
blog.get("/hollywood",hollydata)
blog.get("/fitness",fitnessdata)
blog.get("/food",fooddata)
blog.get("/:genre/:id",singledata)

module.exports = blog