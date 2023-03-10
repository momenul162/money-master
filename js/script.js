function calculateButton() {
  const inputIncome = document.getElementById("input-income");
  const totalIncome = parseFloat(inputIncome.value);

  const inputFoodCost = document.getElementById("food-cost");
  const foodCost = parseFloat(inputFoodCost.value);

  const inputRentCost = document.getElementById("rent-cost");
  const rentCost = parseFloat(inputRentCost.value);

  const inputClothesCost = document.getElementById("clothes-cost");
  const clothesCost = parseFloat(inputClothesCost.value);

  const totalCost = foodCost + rentCost + clothesCost;
  const mainBalance = totalIncome - totalCost;

  if (totalIncome > totalCost) {
    document.getElementById("error-msg").style.display = "none";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
  if (0 > foodCost || 0 > rentCost || 0 > clothesCost) {
    alert("Please set positive numbers");
  } else {
    document.getElementById("total-cost").innerText = totalCost;
    document.getElementById("main-balance").innerText = mainBalance;
  }
}

document.getElementById("save-button").addEventListener("click", function () {
  const inputIncome = document.getElementById("input-income");
  const totalIncome = parseFloat(inputIncome.value);

  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);

  const saveInput = document.getElementById("save-input");
  const savePercent = parseFloat(saveInput.value);

  const percentTheory = totalIncome * savePercent;
  const savingMoney = percentTheory / 100;
  const saveMoney = (document.getElementById("save-money").innerText = savingMoney);

  const reminingBalance = document.getElementById("current-balance");
  let currentBalance = parseFloat(reminingBalance.innerText);
  if (balance < saveMoney) {
    alert("Insufficiant balance");
  } else {
    const extraBalance = balance - saveMoney;
    document.getElementById("current-balance").innerText = extraBalance;
  }
});
