// random code start
let randomNumber = Math.floor(Math.random() * 1000000) + 1;


let Guess = prompt("Guess a number between 1 to 100000:");
if (parseInt(Guess) === randomNumber) {
    alert("You are right!");
} else {
    alert("wrong The correct number was" + randomNumber + ".");
}
// random code end



// date work
function here() {
    for (let index = 1; index <= 1; index++) {
       
     let telltime = new Date()
    let time1 = telltime.getHours()
    let time2= telltime.getMinutes()
 
  
     console.log(time1 +":"+ time2);
     
 }}