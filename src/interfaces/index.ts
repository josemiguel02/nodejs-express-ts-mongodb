import { Document } from 'mongoose'

export interface Camera extends Document {
  name: string
  brand: string
  model: string
  price: number
  connection_type: string
  image: string
  createdAt: Date
}
