const { Router } = require("express");

// Handle all requests to /diary
const diaryController = require("../controllers/diary");

// Route Definitions
const diaryRouter = Router();
diaryRouter.get("/", diaryController.index);

// diaryRouter.post("/", diaryController.create);
// diaryRouter.get("/:id", diaryController.show);
// diaryRouter.patch("/:id", diaryController.update);
// diaryRouter.delete("/:id", diaryController.destroy);

module.exports = diaryRouter
