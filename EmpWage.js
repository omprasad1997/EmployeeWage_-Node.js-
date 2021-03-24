const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR   = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays=0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
	totalWorkingDays < NUM_OF_WORKING_DAYS){
      totalWorkingDays++;
      let  empCheck = Math.floor(Math.random()*10)%3;
      let empHrs    = getWorkingHours(empCheck);
      totalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
}

function calcDailyWage(empHrs){
   return empHrs*WAGE_PER_HOUR;
}

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

let empWage = calcDailyWage(totalEmpHrs);

let totalEmpWage = 0;
function sum(dailyWage){
   totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A-Total Days:"+totalWorkingDays+
" Total Hrs:" + totalEmpHrs + " Emp Wage:" + totalEmpWage);

function totalWages(totalWage,dailyWage){
      return totalWage + dailyWage;
}

console.log("UC7A-Emp wage with reduce: "+
                  empDailyWageArr.reduce(totalWages,0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
   dailyCntr++;
   return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage){
   return dailyWage.includes(MAX_HRS_IN_MONTH);
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage filter when fulltime wage earned");
console.log(fullDayWageArr);

