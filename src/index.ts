import express, { Request, Response, urlencoded, json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import './database'
import {
  getCameras,
  createCamera,
  editCamera,
  deleteCamera
} from './controllers/cameras.controller'

const app = express()

// Config
app.set('port', process.env.PORT || 5000)
app.use(cors())

// Middlewares
app.use(morgan('dev'))
app.use(urlencoded({ extended: false }))
app.use(json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!!'
  })
})

// Get all cameras
app.get('/api/cameras', getCameras)

// Create a new camera
app.post('/api/cameras/add', createCamera)

// Edit a camera
app.put('/api/cameras/edit/:id', editCamera)

// Delete a camera
app.delete('/api/cameras/delete/:id', deleteCamera)

// Start server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')} 🌍`)
})
