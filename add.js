let raceNumber=Math.floor(Math.random()*1000);
let earlyRegistered=true;
let age=18;

if (age>=18 && earlyRegistered) { //Checks whever the runner is an adult and regostered early.
    raceNumber+=1000;               // if it is true, their race numbee+1000
} 

if (age>=18 && earlyRegistered) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if (age>=18 && !earlyRegistered) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}`);
} else if (age<18) {
  console.log(`You will race at 12:30 am and your race number is ${raceNumber}`);
}