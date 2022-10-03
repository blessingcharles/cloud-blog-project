const multer = require("multer");
const uuid = require("uuid");

const MIME_TYPES = {
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
    "image/png": "png",
};
const randomName = () => {
    return String(Math.floor(Math.random() * 100000000));
};
const imageUploader = multer({
    limits: 500000,
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            const Name = randomName();
            const extension = MIME_TYPES[file.mimetype];
            cb(null, Name + "." + extension);
        },
        destination: (req, file, cb) => {
            cb(null, "uploads/images");
        },
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPES[file.mimetype];
        const error = isValid ? null : new Error("invalid mime type");
        cb(error, isValid);
    },
});

module.exports = imageUploader;
