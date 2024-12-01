import multer from 'multer';
import nextConnect from 'next-connect';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single('image');

const uploadImage = nextConnect()
  .use((req, res, next) => {
    uploadMiddleware(req, res, (err) => {
      if (err) {
        res.status(500).json({ success: false, error: err.message });
        return;
      }
      next();
    });
  });

export default uploadImage;
