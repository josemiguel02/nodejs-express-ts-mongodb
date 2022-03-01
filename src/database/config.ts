import { config } from 'dotenv'

config()

const CONFIG = {
  uri: process.env.URI,
  user: process.env.USER,
  password: process.env.PASSWORD
}

export default CONFIG
