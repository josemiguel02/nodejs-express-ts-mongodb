import { Schema, model } from 'mongoose'

const CameraSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  connection_type: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default model('cameras', CameraSchema)
