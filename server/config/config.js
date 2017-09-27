module.exports = {
  development: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE_NAME,
    host: process.env.RDS_DB_ENDPOINT,
    port: 5434,
    logging: console.log,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
