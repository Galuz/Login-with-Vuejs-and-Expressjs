export const port = 8081
export const db = {
  database: process.env.DB_NAME || 'acProject',
  user: process.env.DB_USER || 'acProject',
  password: process.env.DB_PASS || 'acProject',
  options: {
    dialect: process.env.DIALECT || 'sqlite',
    host: process.env.HOST || 'localhost',
    storage: './acProject.sqlite'
  }
}
