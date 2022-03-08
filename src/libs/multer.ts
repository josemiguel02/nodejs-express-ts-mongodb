import multer from 'multer'
import { v4 } from 'uuid'
import { extname } from 'path'

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, fn) => {
    fn(null, `${v4()}${extname(file.originalname)}`)
  }
})

export default multer({ storage })
