// Question 1

function FeatureToggle (featureName,isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}
const login_feature = new FeatureToggle ("Login",false,["admins","developers","data analysts","betaTesters"]);

FeatureToggle.prototype.canAccess = function(userRole){
    return this.userGroupAccess.includes(userRole);
}

FeatureToggle.prototype.toggleFeature = (flag)=>{
    if(this.isEnabled==true){
        return flag;
    }
    else{
        console.log("Disabled");
    }
    // return flag;
};

FeatureToggle.prototype.simulate_attempts =(userRole)=>{
       switch (userRole){
           case "admins":
               console.log(`Access confirmed`);
               break;
           case "betaTesters":
               console.log(`Access confirmed`);
               break;
           case "developers":
               console.log(`Access confirmed`);
               break;
           default:
               console.log(`Access denied`);
               break;
       }
    }
console.log(login_feature.canAccess("admins"));
login_feature.toggleFeature("Enabled");
login_feature.simulate_attempts("admins");


// Question 2

function TimeLog(freelancerName, projectDetails, logs) {
   this.freelancerName = freelancerName,
   this.projectDetails = projectDetails,
   this.logs = logs
}
const freelancer1 = new TimeLog("Akeza Saloi", { name: "Akeza's Blog", rate: 100 },
   [
       { date: "2024-11-13", hoursWorked: 6 },
       { date: "2024-11-12", hoursWorked: 9 },
       { date: "2024-11-13", hoursWorked: 5 },
       { date: "2024-11-14", hoursWorked: 1 },
       { date: "2024-11-18", hoursWorked: 7 },
       { date: "2024-11-17", hoursWorked: 1 },
       { date: "2024-11-16", hoursWorked: 7 },
       { date: "2024-11-15", hoursWorked: 1 },

   ]
);
TimeLog.prototype.calculateEarnings = function () {
const totalHours = this.logs.reduce((a, b) => a + b.hoursWorked, 0)
   console.log(totalHours)
  
   const earnings = this.projectDetails.rate * totalHours
   return earnings;
}
console.log(`You are earning ${freelancer1.calculateEarnings()}`);;
// TimeLog.prototype.filterlogs = function (initialDate, finalDate) {
//     return this.logs.filter(input => {
//         const enteredDate = new Date(input.date);
        
//             return enteredDate;
        
//     });
 
//  }
// console.log( freelancer1.filterlogs("2025-12-11", "2025-02-07"));

TimeLog.prototype.trackExceededHours = function () {
   
       
const totalHours = this.logs.reduce((a,b) => a + b.hoursWorked,0);
if (totalHours>40){
   return `${this.freelancerName} exceeded 40 hours at work this week.`
}
else{
  return `${this.freelancerName} exceeded 40 hours at work this week.`

  } 
}


console.log(freelancer1.trackExceededHours())

// // Question 3

function Order(customer, items, status) {
   this.customer = customer,
   this.items = items,
   this.status = status
}
const firstOrder = new Order({ name: "Akeza", email: "saloi@gmail.com" },
   [
       { productName: "Dove Shampoo", quantity: 1, unitPrice: 800 },
       { productName: "Bamsi conditioner", quantity: 3, unitPrice: 140 },
       { productName: "Dove Shower gel", quantity: 2, unitPrice: 400 },
       { productName: "Face mask", quantity: 30, unitPrice: 500 },
       { productName: "Hair bands", quantity: 6, unitPrice: 200 }
   ],
   ""
)
Order.prototype.calculateBill = function () {
   const bill = this.items.reduce((a, b) => a + b.unitPrice, 0)
   return bill
}
console.log(`Your bill is ${firstOrder.calculateBill()} KES`)
Order.prototype.updateOrderStatus = function (billPaid) {
  return billPaid ? this.status = "Paid" : this.status = "Pending";

};
console.log(firstOrder.updateOrderStatus(""));
Order.prototype.categorizeOrder= function () {
    let priority = "";
   switch (this.status) {
       case "Paid":
            priority = "Very urgent";
            break;
       case "Pending":
            priority = "Not urgent";
            break;
       default:
            priority = "Order was cancelled";
            break;
   }
   return priority;
}
console.log(firstOrder.categorizeOrder());
console.log(firstOrder);


// //Question 4

class Employee {
   constructor(id,name,performanceMetrics,feedback){
   this.id = id,
   this.name=name,
   this.performanceMetrics = performanceMetrics,
   this.feedback = feedback
   }
}

const employees = [
    new Employee (27, "Akeza Saloi",{communication:5,effiecincy:8,reliabity:6},[]),
    new Employee(20,"Umutoni Jacky",{communication:4, effiecincy:9, reliabity:7},[])];

console.log(employees);

Employee.prototype.calcAverageScore= function (){

 

}
console.log(employees.calcAverageScore);