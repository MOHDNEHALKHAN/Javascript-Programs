/* To check whether the year is a leap year or not a leap year */

function leapYear(year){
    
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "leap year";
            }else{
                return "Not a leap year";
            }
        }else{
            return "leap year";
        }  
    } else {
        return "Not a leap year.";
    }
        
    }
    console.log(leapYear(3000));