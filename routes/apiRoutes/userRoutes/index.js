const router = require("express").Router();

// /api/user/todos
router.route("/todos").post(addTodo);
module.exports = router;
