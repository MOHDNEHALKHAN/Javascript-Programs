/* Program using constructor */

function Housekeeper(name, yearofExperience , age , previousSalary){
    this.name = name; 
    this.yearofExperience = yearofExperience; 
    this.age = age; 
    this.previousSalary = previousSalary; 
 }
 
 const housekeeper1 = new Housekeeper("peon",5,33,5000);
 console.log(housekeeper1);