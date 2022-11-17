// const DBConfig = require('./src/config/db.config').default
const resolve = require('path').resolve
// const { type ,username, password, database, synchronize, host, port } = DBConfig

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'food-oasis-db',
    synchronize: true,
    entities: [resolve(__dirname, "src/modules/**/entity/*.entity{.ts,.js}")],
    subscribers: [resolve(__dirname, "src/modules/**/subscribers/*.subscriber.ts")],
}