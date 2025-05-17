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
// Order.prototype.updateStatus = function (paymentReceived) {
//    if (paymentReceived == "yes") {
//        this.status = "Paid"
//    } else {
//        this.status = "Pending"
//    }

//    return this.status

// }

// Order.prototype.orderUrgency = function () {
//    switch (this.status) {
//        case "Paid":
//            return "urgency:High";
//            break;
//        case "pending payment":
//            return "urgency:Low"
//        default:
//            return "Make payment to see the urgency status"
//    }


// }

// console.log(order1)
// console.log(order1.updateStatus("yes"))
// console.log(order1.orderUrgency())


// //Question 4
class Employee {
    constructor(id,name,performanceMetrics,feedback){
    this.id = id,
    this.name=name,
    this.performanceMetrics = performanceMetrics,
    this.feedback = feedback
    }
 }
 
 const firstEmployee = new Employee (27, "Akeza Saloi",{communication:5,effiecincy:8,reliabity:6},[]);
 
//  console.log(firstEmployee);
 
//  Employee.prototype.calcAverageScore= function (){
//  const averageScore = this.performanceMetrics.reduce((a,b)=> a+b,0);
//   return averageScore/3;
 
//  }
//  console.log(firstEmployee.calcAverageScore());
Employee.prototype.classifyPerformance = function (){
   const average = this.averageMarks()
   if(average>=7){
       return "Excellent"
   }else if (average >=5  && average <7){
       return "Very good"
   }else{
       return "Good"
   }
}

// Employee.prototype.moreFeedback = function() {
//    const average = this.averageMarks()
//    if(average>=7){
//        this.feedback = ["Excellent performance","Good improvement","You have made improvement on your communication skills"]


//     }else if (average >=5  && average <7){
//        this.feedback = ["Very good performance","You've greatly improved on your efficiency","Add more effort on your communication"]

//    }else{
//        this.feedback = ["Good performance","You have made improvement on your communication skills","You're performance is declining"]

//    }

//     return this.feedback
// }


// // Question 5

// class Course{
//    constructor(title,instructor,students){
//           this.title = title
//           this.instructor = instructor
//           this.students = students
//    }
// }


// Course.prototype.completedCourse = function (){
//           return this.students.filter(student=> student.status === true).map(student => student.name);

// }

// Course.prototype.enrolled = function (courseName){
//    return this.students.filter(student => student.expertise ===courseName).length

// }

// Course.prototype.instructorMessage = function (){
//       if(this.students.length >5){
//          return `Instructor ${this.instructor.name}: Your class has more than 5 students`
//       }else{
//        return `${this.instructor.name}: Your class has few students`
//       }
// }
// const course1 = new Course(
//    "Product Management",
//    {name:"John Peter",expertise:"Python"},
//    [
//       {name:"Queen Carine",expertise:"Python",status:true},
//       {name:"Queen Keza",expertise:"Data Science",status:true},
//       {name:"Akeza Saloi",expertise:"Python",status:false},
//       {name:"Kevine Umutoni",expertise:"Data Science",status:true},
//       {name:"Jacqueline",expertise:"Research",status:true},
//       {name:"Emeline",expertise:"Python",status:false}
//    ]
// )


// console.log(course1.completedCourse())
// console.log(course1.enrolled("Python"))
// console.log(course1.instructorMessage("Python"))