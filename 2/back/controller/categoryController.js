const response = require("../response")
const { Category } = require("../settings/db")

class categoryController{
  async addCategody(req,res){
    const {name} = req.body
    await Category.create({name})
    response(200,'Create',res)
  }
  async getAll(req,res){
    const categories = await Category.findAll()
    res.send(categories).status(200)
  } 
}
module.exports = new categoryController()