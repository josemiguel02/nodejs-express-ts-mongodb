import { Request, Response } from 'express'
import { NativeError } from 'mongoose'
import { Camera } from '../interfaces'
import Cameras from '../models/cameras'
import { resolve } from 'path'
import fs from 'fs-extra'

export const getCameras = async (req: Request, res: Response) => {
  try {
    const cameras = await Cameras.find()
    res.status(200).json(cameras)
  } catch (e) {
    res.status(500).json({ e })
    console.error(e)
  }
}

export const createCamera = async (req: Request, res: Response) => {
  try {
    const { name, brand, model, price, connection_type } = req.body
    const newCamera = new Cameras({
      name,
      brand,
      model,
      price,
      connection_type,
      image: req.file?.path
    })

    await newCamera.save()
    res.status(200).json(newCamera)
  } catch (e) {
    res.status(500).json({ e })
    console.error(e)
  }
}

export const editCamera = (req: Request, res: Response) => {
  const { id } = req.params
  const { name, brand, model, price, connection_type } = req.body

  Cameras.findByIdAndUpdate(
    id,
    {
      name,
      brand,
      model,
      price,
      connection_type,
      image: req.file?.path
    },
    { new: true },
    (error, camera) => {
      if (error) {
        res.status(500).json({ error })
        console.error(error)
        return
      }

      res.status(200).json(camera)
    }
  )
}

export const deleteCamera = (req: Request, res: Response) => {
  const { id } = req.params

  Cameras.findByIdAndDelete(id, (error: NativeError, camera: Camera) => {
    if (error) {
      res.status(500).json({ error })
      console.error(error)
      return
    }

    fs.unlinkSync(resolve(camera.image))
    res.status(200).json(camera)
  })
}
