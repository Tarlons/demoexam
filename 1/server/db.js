const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

const db = new JsonDB(new Config('db.json'))

const data = db.getData('/')

if (!data.users) db.push('/users', [])
if (!data.session) db.push('/session', {})

module.exports = db
