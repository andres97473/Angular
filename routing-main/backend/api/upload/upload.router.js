const router = require("express").Router();
const { createUpload, getFiles } = require("./upload.controller");

router.post("/", createUpload);
router.get("/", getFiles);

module.exports = router;
