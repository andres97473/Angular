const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
router.get("/", checkToken, getUsers);
//router.post("/", checkToken, createUser);
// router.get("/:id", checkToken, getUserByUserId);
// router.patch("/", checkToken, updateUsers);
// router.delete("/", checkToken, deleteUser);
// router.post("/login", login);
//router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserByUserId);
router.patch("/", updateUsers);
router.delete("/", deleteUser);
router.post("/login", login);

module.exports = router;
