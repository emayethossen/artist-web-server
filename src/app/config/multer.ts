import multer from "multer";
import path from "path";

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

// File filter (allow only images)
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const isValid = allowedFileTypes.test(file.mimetype) && allowedFileTypes.test(path.extname(file.originalname));
    isValid ? cb(null, true) : cb(new Error("Only images are allowed!"));
};

// Multer instance
export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB file size limit
});
