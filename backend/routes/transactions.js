const { addIncome, deleteIncome } = require("../controllers/income");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);
module.exports = router;
