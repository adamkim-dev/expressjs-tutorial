import multer from "multer";

const formattedDate = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
})
  .format(Date.now())
  .replace(/\//g, "_");

export const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, formattedDate + "-" + file.originalname);
  },
});
