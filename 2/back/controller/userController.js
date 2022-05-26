const { Op } = require("sequelize");
const response = require("../response");
const { User } = require("../settings/db");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class userController {
  async signup(req, res) {
    const { login, password, name, surname, patronymic, email } = req.body;
    const candidate = await User.findOne({where:{[Op.or]:{login,email}}})
    if(candidate)return response(402,'Такой пользователь уже существует',res)
    const hashPassword = bcrypt.hashSync(password,7)
    await User.create({ login, password:hashPassword, name, surname, patronymic, email })
    return response(200,'Вы зарегестрированы',res)
  }
  async signin(req, res) {
    const {login,password} = req.body
    const user = await User.findOne({where:{login}})
    if(!user)return response(402,'Такого пользователя не существует')
    const confirmPass = bcrypt.compareSync(password,user.password)
    if(!confirmPass) return response(402,'Неверный пароль',res)
    const token = jwt.sign({id:user.id,login,email:user.email},'print',{expiresIn:'24h'})
    res.status(200).send({token:token})
  }
}
module.exports = new userController();
