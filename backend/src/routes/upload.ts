import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({ msg: 'File uploaded successfully', file: req.file });
  } catch (err) {
    res.status(500).json({ msg: 'Error uploading file' });
  }
});

export { router as uploadRoutes };
