import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";




// ## What Multer Does

// Multer is a middleware that sits between the request and your controller. It:
// ```
// Request comes in with file
//         ↓
// Multer intercepts it
//         ↓
// Multer reads the multipart data
//         ↓
// Multer processes the file
//         ↓
// Multer puts parsed data on req.file and req.body
//         ↓
// Your controller can now access the file easily

const storage = new CloudinaryStorage({
    cloudinary: cloudinaryUpload,
    params: async (req, file) => {
        const originalName = file.originalname;
        const extension = originalName.split(".").pop()?.toLocaleLowerCase();

        const fileNameWithoutExtension = originalName
            .split(".")
            .slice(0, -1)
            .join(".")
            .toLowerCase()
            .replace(/\s+/g, "-")
            // eslint-disable-next-line no-useless-escape
            .replace(/[^a-z0-9\-]/g, "");

        const uniqueName =
            Math.random().toString(36).substring(2)+
            "-"+
            Date.now()+
            "-"+
            fileNameWithoutExtension;

        const folder = extension === "pdf" ? "pdfs" : "images";


        return {
            folder : `ph-healthcare/${folder}`,
            public_id: uniqueName,
            resource_type : "auto"
        }
    }

})

export const multerUpload = multer({storage})