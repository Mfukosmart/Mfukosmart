const express = require("express");

const router = express.Router();

const {
  getSales,
  getSaleById,
  createSale,
} = require("../controllers/sales.controller");

router.get("/", getSales);

router.get("/:id", getSaleById);

router.post("/", createSale);

module.exports = router;