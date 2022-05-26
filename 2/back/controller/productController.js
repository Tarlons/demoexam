const { Product } = require("../settings/db");
const uuid = require('uuid').v4
const path = require('path');
const response = require("../response");

class productController {
  async addProduct(req, res) {
    const { name, price, coutry, model, year,categoryId,max_quantity } = req.body;
    const img = req.files.img
    const imgName = uuid()+'.'+img.mimetype.split('/')[1]
    const pathDir = path.join(__dirname,'/../','upload',imgName)
    img.mv(pathDir)
    await Product.create({ img:imgName, name, price, coutry, model, year,categoryId,max_quantity });
    return response(200,'Create',res)
  }
  async getProduct(req, res) {
    const id = req.params.id
    const products = await Product.findOne({where:{id}})
    return res.send(products).status(200)
  }
  async getProductCat(req,res){
    const categoryId = req.params.id
    const products = await Product.findAll({where:{categoryId}})
    return res.send(products).status(200)
  }
  async getAll(req,res){
    const products = await Product.findAll()
    return res.send(products).status(200)
  }
}
module.exports = new productController();
