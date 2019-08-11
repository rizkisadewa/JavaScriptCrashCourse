// Create an array of objects which hold the denominations and their values
var denom = [
    {name: 'ONE HUNDRED', val : 100.00},
    {name: 'TWENTY', val : 20.00},
    {name: 'TEN', val : 10.00},
    {name: 'FIVE', val : 5.00},
    {name: 'ONE', val : 1.00},
    {name: 'QUARTER', val : 0.25},
    {name: 'DIME', val : 0.10},
    {name: 'NICKLE', val : 0.05},
    {name: 'PENNY', val : 0.01}
  ];

function checkCashRegister(price, cash, cid) {
  var output = {status : null, change: []};
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr){
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total : 0});

  // Handle exact exchange
  if(register.total === change){
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if(register.total < change){
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // Loop through denomination array
  var change_arr = denom.reduce(function(acc, curr){
    var value = 0;
    // While there is still money of this type in the drawer
    // And while denomination is larger than the change remaining
    while(register[curr.name] > 0 && change >= curr.val){
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision error
      change = Math.round(change * 100) / 100;
    }

    // Add this denomination to the output only if any was used
    if(value > 0){
      acc.push([curr.name, value]);
    }

    return acc;//Return the current change_arr
  }, []);

  // If there are no elements in change_arr or we have leftover change, return
  //the string "insufficient funds"
  if(change_arr.length < 1 || change > 0){
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // Here your change , ma'am.
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

/*
esign a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Unit	           Amount
Penny	                 $0.01 (PENNY)
Nickel	               $0.05 (NICKEL)
Dime	                 $0.1 (DIME)
Quarter	               $0.25 (QUARTER)
Dollar	               $1 (DOLLAR)
Five Dollars	         $5 (FIVE)
Ten Dollars	           $10 (TEN)
Twenty Dollars	       $20 (TWENTY)
One-hundred Dollars	   $100 (ONE HUNDRED)
=============CODE EXPLANATION==============

You have to create a program that will return an object containing a status key and a change key.
The value of status is the string INSUFFICIENT_FUNDS, CLOSED, or OPEN, and the value of change is a 2D array of the change due.

=================CODE EXPLANATION===========================
First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys.
Next, transform the CID array into a drawer object.
Then, handle the conditions of exact change and insufficient funds.
Loop through the denom array and update the change and values while there is still money of each type in the drawer
and while the denomination is larger than the change remaining.
Add this denomination to the accumulator of change_arr if any of this type was used.
After the loop, change_arr is a 2D array of the change due, sorted from highest to lowest denomination.
If there are no elements in change_arr or you still owe change, return the output object with a status of INSUFFICIENT_FUNDS.
Finally you can give the correct change. Return the output object with a status of OPEN and change_arr as the value of change.

*/
