const database = require("./DataStorage")

const home = (req,res)=>{
    res.send(database)
}
const bollydata = (req,res)=>{
    const data = database.filter(item=>item.genre==="bollywood")
    res.send(data)
}
const techdata = (req,res)=>{
    const data = database.filter(item=>item.genre==="technology")
    res.send(data)
}
const hollydata = (req,res)=>{
    const data = database.filter(item=>item.genre==="hollywood")
    res.send(data)
}
const fitnessdata = (req,res)=>{
    const data = database.filter(item=>item.genre==="fitness")
    res.send(data)
}
const fooddata = (req,res)=>{
    const data = database.filter(item=>item.genre==="food")
    res.send(data)   
}
const singledata = (req,res)=>{
    const Genre = req.params.genre
    const Id = req.params.id
    const data = database.filter(item=>{
        if(item.genre===Genre && item.id==Id){
            return item
        }
    })
    res.send(data)
}
module.exports = {home,bollydata,techdata,hollydata,fitnessdata,fooddata,singledata}