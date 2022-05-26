import { config } from 'dotenv'

config()

const CONFIG = {
  uri: process.env.DB_URI,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

export default CONFIG
