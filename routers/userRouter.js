const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Create User
router.post("/", async (req, res, next) => {
  const { user, pw, nickname } = req.body;
  try {
    const result = await prisma.user.create({
      data: {
        username: user,
        password: pw,
        nickname: nickname,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Get User
router.post("/login", async (req, res, next) => {
  const { user, pw } = req.body;
  console.log(user, pw);
  try {
    const result = await prisma.user.findMany({
      where: {
        AND: [{ username: user }, { password: pw }],
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
