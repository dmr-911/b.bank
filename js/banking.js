// handle deposite event handler
document.getElementById("deposit-button").addEventListener("click", function () {
    // get the deposit amount
    const depositAmountInput = document.getElementById("deposit-input");
    const depositAmount = depositAmountInput.value;

    // get the deposit total and merge it
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositTotal = depositTotal.innerText;

    // Update total deposite amount
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(depositAmount);
      depositTotal.innerText = newDepositTotal;

    // get the total balance and update total balance
      const previousBalance = document.getElementById("balance-total");
      const previousBalanceAmount = previousBalance.innerText;
      const newBalance =  parseFloat(previousBalanceAmount) + parseFloat(depositAmount);

      previousBalance.innerText = newBalance;

    // clear deposit input
    depositAmountInput.value = "";
  });

// handle withdraw event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    // get the withdraw amount
    const withdrawAmountInput = document.getElementById("withdraw-input");
    const withdrawValue = withdrawAmountInput.value;

    // get the previous withdraw total and update it
    const previousWithdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawAmount = previousWithdrawTotal.innerText;

    previousWithdrawTotal.innerText = parseFloat(previousWithdrawAmount) + parseFloat(withdrawValue);

    // get the total balance and update it
    const previousTotal = document.getElementById("balance-total");
    const previousTotalAmount = previousTotal.innerText;

    previousTotal.innerText = parseFloat(previousTotalAmount) - parseFloat(withdrawValue);

    // clear the input
    withdrawAmountInput.value = "";
  });
