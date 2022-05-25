document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('Shoitane Gutai');
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmounttext = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmounttext);

    // console.log(newDepositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDepositAmounttext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmounttext);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + previousDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    depositInput.value = '';

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('Shoitane laree naki');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})