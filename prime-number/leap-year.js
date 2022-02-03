
function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return result = 'Yes' +' '+ year + ' '+  'is a leap year';
    } else{
        return result = 'No' + ' ' + year + ' ' + 'is a not leap year';
    }
}
var result = isLeapYear(2024);
console.log(result);