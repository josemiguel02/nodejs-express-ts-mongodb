import mongoose, { ConnectOptions } from 'mongoose'
import CONFIG from './config'

const { uri, user, password } = CONFIG

const OPTIONS: ConnectOptions = {
  user,
  pass: password
}

mongoose.connect(uri!, OPTIONS)
const connection = mongoose.connection

connection.once('open', () => {
  console.log('Mongodb connect sucessffuly 🌿')
})

connection.on('error', err => {
  console.error(err)
  process.exit(0)
})
