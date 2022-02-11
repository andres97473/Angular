const router = require("express").Router();
const {
  createUpload,
  getFiles,
  createFilesCategory,
  getFilesCategory,
} = require("./upload.controller");

// files
router.post("/", createUpload);
router.get("/", getFiles);

// files category
router.post("/category", createFilesCategory);
router.get("/category", getFilesCategory);

module.exports = router;
