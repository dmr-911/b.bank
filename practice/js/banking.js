// calculation for deposit
document.getElementById("deposite-update-button").addEventListener("click", function () {
    // get user deposite input
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;

    // get previous deposit amount 
    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositValue = previousDeposit.innerText;

    // Update current deposit amount
    const currentDepositAmount = parseFloat(depositInputValue) + parseFloat(previousDepositValue);
    previousDeposit.innerText = currentDepositAmount;

    // get previous total balance amount 
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceAmount = totalBalance.innerText;

    // update current total balance amount 
    const currentTotalBalanceAmount = parseFloat(depositInputValue) + parseFloat(totalBalanceAmount);
    totalBalance.innerText = currentTotalBalanceAmount;

    // clear input
    depositInput.value = '';
});
  
// calculation for withdraw
document.getElementById('withdraw-update-button').addEventListener('click', function () {
  // get user withdraw input amount
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputValue = withdrawInput.value;

  // get previous withdraw total
  const previousWithdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalValue = previousWithdrawTotal.innerText;

  // update current withdraw total
  const currentWithdrawAmount =
    parseFloat(withdrawInputValue) + parseFloat(previousWithdrawTotalValue);
  previousWithdrawTotal.innerText = currentWithdrawAmount;

  // get previous total balance amount
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceAmount = totalBalance.innerText;

  // update current total balance amount
  const currentTotalBalanceAmount =
    parseFloat(totalBalanceAmount) - parseFloat(withdrawInputValue);
  totalBalance.innerText = currentTotalBalanceAmount;

  // clear input
  withdrawInput.value = "";
})