const date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(`The day today is ${days[date.getDay()]}`);
let AMPM  = "";
let hours = date.getUTCHours();
if ( hours > 12){
 AMPM = "PM";
 hours = hours-11;
}
else {
 AMPM = "AM";
}
console.log(`Current time is: ${hours} ${AMPM} : ${date.getUTCMinutes()}: ${date.getUTCSeconds()} `);
