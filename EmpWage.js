const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR   = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck){
   switch(empCheck){
     case IS_PART_TIME:
	return PART_TIME_HOURS;
     case IS_FULL_TIME:
        return FULL_TIME_HOURS;
     default:
        return 0;
      }
   }

let totalEmpHrs = 0;
let totalWorkingDays=0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();


function calcDailyWage(empHrs){
   return empHrs*WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
	totalWorkingDays < NUM_OF_WORKING_DAYS){
      totalWorkingDays++;
      let  empCheck = Math.floor(Math.random()*10)%3;
      let empHrs    = getWorkingHours(empCheck);
      totalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
      empDailyHrsMap.set(totalWorkingDays,empHrs);
      empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage){
   return totalWage + dailyWage;
}

console.log("UC8 - Emp Wage Map totalHrs: " + 
               Array.from(empDailyWageMap.values()).reduce(totalWages,0));



const findTotal = (totalVal,dailyVal) => {
   return totalVal + dailyVal;
}

let totalHours = Array.from(empDailyHrsMap.values())
                  .filter(dailyHour => dailyHour>0)
                  .reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage=>dailyWage>0)
                  .reduce(findTotal,0);


console.log("UC9A - Emp Wage with arrow.: " + " Total Hours: "+
                  totalHours + " Total Wage: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key) =>{
   if(value == 8) fullWorkingDays.push(key);
   else if(value == 4) partWorkingDays.push(key);
   else nonWorkingDays.push(key);
});

console.log('Full Working Days: '+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: " +nonWorkingDays);