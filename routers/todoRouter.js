const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/", async (req, res, next) => {
  const { title, completed, userId } = req.query;
  console.log(title, userId);
  try {
    const result = await prisma.todolist.create({
      data: {
        title: title,
        userId: +userId,
        completed: Boolean(completed),
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/", async (req, res, next) => {
  const { id } = req.query;
  try {
    const result = await prisma.todolist.findUnique({
      where: {
        id: +id,
      },
    });
    if (result) {
      return res.json(result);
    }
    return res.status(404).json({ msg: "Data not found" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
