const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const { User, Category, Product } = require("../settings/db");
const AdminJSSequelize = require("@adminjs/sequelize");
AdminJS.registerAdapter(AdminJSSequelize);
const adminJs = new AdminJS({
  resources: [
    { resource: User,options:{edit:false} },
    { resource: Category },
    { resource: Product },
  ],
});
const router = AdminJSExpress.buildRouter(adminJs);
module.exports = router;
