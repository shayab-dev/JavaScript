//  module pattern 
// iife

let Bank = (function() {
  let bankbalance = 12000;

  function checkbalance(){
    console.log(bankbalance);
  }

  function setBalance(val){
    bankbalance = val;
    console.log(bankbalance);
  }

  function withdraw(val){
    if(val <= bankbalance){
      bankbalance -= val;
      console.log(bankbalance);
    }
  }

  return {
    checkbalance,
    setBalance,
    withdraw,
  };

}) ();

Bank.withdraw(11000);
Bank.setBalance(15000);
Bank.withdraw(12000);

