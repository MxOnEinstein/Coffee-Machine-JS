// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

/**
console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");
**/

let coffeMachine = {
  haveWater: 400,
  haveMilk: 540,
  haveBeans: 120,
  haveCups: 9,
  haveMoney: 550
}

let coffe1 = {
  name: "espresso",
  cup: 1,
  cost: 4,
  water: 250,
  milk: 0,
  beans: 16
}

let coffe2 = {
  name: "latte",
  cup: 1,
  cost: 7,
  water: 350,
  milk: 75,
  beans: 20
}

let coffe3 = {
  name: "cappuccino",
  cup: 1,
  cost: 6,
  water: 200,
  milk: 100,
  beans: 12
}

let count1 = 0;//water
let count2 = 0;//milk
let count3 = 0;//beans
let count4 = 0;//cups
let count5 = 0;//money

let hv = coffeMachine.haveWater;
let hm = coffeMachine.haveMilk;
let hb = coffeMachine.haveBeans;
let hc = coffeMachine.haveCups;
let hmoney = coffeMachine.haveMoney;


while(true) {
  console.log("Write action (buy, fill, take, remaining, exit):");
  let bft = input();
  if(bft == "buy"){
    while(true) {
      console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino back - to main menu:"); 
      let cof = input();
      if(cof == "1"){
          hv = coffeMachine.haveWater -= coffe1.water;
          hm = coffeMachine.haveMilk -= coffe1.milk;
          hb = coffeMachine.haveBeans -= coffe1.beans;
          hc = coffeMachine.haveCups -= coffe1.cup;
          hmoney = coffeMachine.haveMoney += coffe1.cost;
        if(coffeMachine.haveWater >= 0 && coffeMachine.haveMilk >= 0 && coffeMachine.haveBeans >= 0 && coffeMachine.haveCups >= 0){
         
          console.log(`I have enough resources, making you a coffee!`);
          }else{
            if(hv < 0){
              console.log(`Sorry, not enough water!`);
              hv = coffeMachine.haveWater += coffe1.water;
              hm = coffeMachine.haveMilk += coffe1.milk;
              hb = coffeMachine.haveBeans += coffe1.beans;
              hc = coffeMachine.haveCups += coffe1.cup;
          hmoney = coffeMachine.haveMoney -= coffe1.cost;
            }else if(hm < 0){
              console.log(`Sorry, not enough milk!`);
              hv = coffeMachine.haveWater += coffe1.water;
              hm = coffeMachine.haveMilk += coffe1.milk;
              hb = coffeMachine.haveBeans += coffe1.beans;
              hc = coffeMachine.haveCups += coffe1.cup;
              hmoney = coffeMachine.haveMoney -= coffe1.cost;
            }else if(hb < 0){
              console.log(`Sorry, not enough beans!`);
              hv = coffeMachine.haveWater += coffe1.water;
              hm = coffeMachine.haveMilk += coffe1.milk;
              hb = coffeMachine.haveBeans += coffe1.beans;
              hc = coffeMachine.haveCups += coffe1.cup;
              hmoney = coffeMachine.haveMoney -= coffe1.cost;
            }else if(hc < 0){
              console.log(`Sorry, not enough cups!`);
              hv = coffeMachine.haveWater += coffe1.water;
              hm = coffeMachine.haveMilk += coffe1.milk;
              hb = coffeMachine.haveBeans += coffe1.beans;
              hc = coffeMachine.haveCups += coffe1.cup;
              hmoney = coffeMachine.haveMoney -= coffe1.cost;
            }
          }
      break;
        }else if(cof == "2"){
          hv = coffeMachine.haveWater -= coffe2.water;
          hm = coffeMachine.haveMilk -= coffe2.milk;
          hb = coffeMachine.haveBeans -= coffe2.beans;
          hc = coffeMachine.haveCups -= coffe2.cup;
          hmoney = coffeMachine.haveMoney += coffe2.cost;
        if(coffeMachine.haveWater >= 0 && coffeMachine.haveMilk >= 0 && coffeMachine.haveBeans >= 0 && coffeMachine.haveCups >= 0){
         
          console.log(`I have enough resources, making you a coffee!`);
          }else{
            if(hv < 0){
              console.log(`Sorry, not enough water!`);
              hv = coffeMachine.haveWater += coffe2.water;
              hm = coffeMachine.haveMilk += coffe2.milk;
              hb = coffeMachine.haveBeans += coffe2.beans;
              hc = coffeMachine.haveCups += coffe2.cup;
          hmoney = coffeMachine.haveMoney -= coffe2.cost;
            }else if(hm < 0){
              console.log(`Sorry, not enough milk!`);
              hv = coffeMachine.haveWater += coffe2.water;
              hm = coffeMachine.haveMilk += coffe2.milk;
              hb = coffeMachine.haveBeans += coffe2.beans;
              hc = coffeMachine.haveCups += coffe2.cup;
              hmoney = coffeMachine.haveMoney -= coffe2.cost;
            }else if(hb < 0){
              console.log(`Sorry, not enough beans!`);
              hv = coffeMachine.haveWater += coffe2.water;
              hm = coffeMachine.haveMilk += coffe2.milk;
              hb = coffeMachine.haveBeans += coffe2.beans;
              hc = coffeMachine.haveCups += coffe2.cup;
              hmoney = coffeMachine.haveMoney -= coffe2.cost;
            }else if(hc < 0){
              console.log(`Sorry, not enough cups!`);
              hv = coffeMachine.haveWater += coffe2.water;
              hm = coffeMachine.haveMilk += coffe2.milk;
              hb = coffeMachine.haveBeans += coffe2.beans;
              hc = coffeMachine.haveCups += coffe2.cup;
              hmoney = coffeMachine.haveMoney -= coffe2.cost;
            }
          }
        break;
        }else if(cof == "3"){
          hv = coffeMachine.haveWater -= coffe3.water;
          hm = coffeMachine.haveMilk -= coffe3.milk;
          hb = coffeMachine.haveBeans -= coffe3.beans;
          hc = coffeMachine.haveCups -= coffe3.cup;
          hmoney = coffeMachine.haveMoney += coffe3.cost;
                if(coffeMachine.haveWater >= 0 && coffeMachine.haveMilk >= 0 && coffeMachine.haveBeans >= 0 && coffeMachine.haveCups >= 0){
         
          console.log(`I have enough resources, making you a coffee!`);
          }else{
            if(hv < 0){
              console.log(`Sorry, not enough water!`);
              hv = coffeMachine.haveWater += coffe3.water;
              hm = coffeMachine.haveMilk += coffe3.milk;
              hb = coffeMachine.haveBeans += coffe3.beans;
              hc = coffeMachine.haveCups += coffe3.cup;
          hmoney = coffeMachine.haveMoney -= coffe3.cost;
            }else if(hm < 0){
              console.log(`Sorry, not enough milk!`);
              hv = coffeMachine.haveWater += coffe3.water;
              hm = coffeMachine.haveMilk += coffe3.milk;
              hb = coffeMachine.haveBeans += coffe3.beans;
              hc = coffeMachine.haveCups += coffe3.cup;
              hmoney = coffeMachine.haveMoney -= coffe3.cost;
            }else if(hb < 0){
              console.log(`Sorry, not enough beans!`);
              hv = coffeMachine.haveWater += coffe3.water;
              hm = coffeMachine.haveMilk += coffe3.milk;
              hb = coffeMachine.haveBeans += coffe3.beans;
              hc = coffeMachine.haveCups += coffe3.cup;
              hmoney = coffeMachine.haveMoney -= coffe3.cost;
            }else if(hc < 0){
              console.log(`Sorry, not enough cups!`);
              hv = coffeMachine.haveWater += coffe3.water;
              hm = coffeMachine.haveMilk += coffe3.milk;
              hb = coffeMachine.haveBeans += coffe3.beans;
              hc = coffeMachine.haveCups += coffe3.cup;
              hmoney = coffeMachine.haveMoney -= coffe3.cost;
            }
          }
        break;
        }else if(cof == "back"){
        break;
      }
    }
  }else if(bft == "fill"){

        console.log("Write how many ml of water you want to add: ");
        hv = coffeMachine.haveWater += Number(input());
      
        console.log("Write how many ml of milk you want to add: ");
        hm = coffeMachine.haveMilk += Number(input());

        console.log("Write how many grams of coffee beans you want to add: ");
        hb = coffeMachine.haveBeans += Number(input());

        console.log("Write how many disposable cups you want to add: ");
        hc = coffeMachine.haveCups += Number(input());
  
  }else if(bft == "take"){
  
        console.log(`I gave you ${hmoney}`);
        hmoney = 0;
  
  }else if(bft == "remaining"){
      console.log("The coffee machine has:");
      console.log(`${hv} ml of water`);
      console.log(`${hm} ml of milk`);
      console.log(`${hb} g of coffee beans`);
      console.log(`${hc} disposable cups`);
      console.log(`$${hmoney} of money`);
  }else if(bft == "exit"){
      break;
  }
}
/**
console.log("Write how many cups of coffee you will need:");
let num = input();

let needWater = num * coffe1.water;
let needMilk = num * coffe1.milk;
let needBeans = num * coffe1.beans;

let count = 0;



for(let i = coffeMachine.haveWater; i >= coffe1.water; i -= coffe1.water){
  count1 += 1;
};
for(let j = coffeMachine.haveMilk; j >= coffe1.milk; j -= coffe1.milk){
  count2 += 1;
}
for(let k = coffeMachine.haveBeans; k >= coffe1.beans; k -= coffe1.beans){
  count3 += 1;
}

if(count1 >= 0 && count2 >= 0 && count3 >= 0){
  for(let l = 0; l < count1 && l < count2 && l < count3; l++){

      count += 1;

    
  }
  
  let andMore = count - num;
  if(andMore > 0){
    console.log(`Yes, I can make that amount of coffee (and even ${andMore} more than that)`);
  }else if(andMore == 0){
    console.log(`Yes, I can make that amount of coffee`);
  }else{
  console.log(`No, I can make only ${count} cups of coffee`);
  }
}else{
  console.log(`No, I can make only ${count} cups of coffee`);
}
**/

    
//let capacity = function(coffeMachine.haveWater, coffeMachine.haveMilk, coffeMachine.haveBeans){
//  if(coffeMachine.haveWater - needWater < 0 && coffeMachine.haveMilk - needWater < 0 && coffeMachine.haveBeans - needBeans < 0){
//     
//  }else{
//
//  }
//}

/**
console.log(`For ${num} cups of coffee you will need:`);
console.log(`${needWater} ml of water`);
console.log(`${needMilk} ml of milk`);
console.log(`${needBeans} g of coffee beans`);
**/
