const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "./db.sqlite",
});

const User = sequelize.define("user", {
  login: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  patronymic: Sequelize.STRING,
  email: Sequelize.STRING,
});
const Category = sequelize.define("category",{
  name:Sequelize.STRING
})
const Product = sequelize.define("product",{
  img:Sequelize.STRING,
  name:Sequelize.STRING,
  price:Sequelize.STRING,
  coutry:Sequelize.STRING,
  model:Sequelize.STRING,
  year:Sequelize.STRING,
  max_quantity:Sequelize.INTEGER
})
Product.belongsTo(Category)

sequelize
  .sync()
  .then(() => console.log("Con db"))
  .catch((err) => console.log(err));

module.exports = { User,Category,Product };
