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

FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag; 
};
FeatureToggle.prototype.simulate_attempts = function(userRole) {
    if (!this.isEnabled) {
        console.log("Feature is disabled");
        return;
    }
    if (this.canAccess(userRole)) {
        console.log("Access confirmed");
    } else {
        console.log("Access denied");
    }
}
console.log(login_feature.canAccess("admins")); 
login_feature.toggleFeature(true); 
login_feature.simulate_attempts("admins"); 
login_feature.simulate_attempts("guest"); 
login_feature.toggleFeature(false); 
login_feature.simulate_attempts("betaTesters"); 


// Question 2


function TimeLog(freelancerName, projectDetails, logs) {
   this.freelancerName = freelancerName,
   this.projectDetails = projectDetails,
   this.logs = logs
}
const freelancer1 = new TimeLog("Akeza Saloi", { name: "Akeza's Blog", hourlyRate: 100 },
   [
       { date: "2024-11-13", hoursWorked: 6 },
       { date: "2024-11-12", hoursWorked: 19 },
       { date: "2024-11-13", hoursWorked: 5 },
       { date: "2024-11-14", hoursWorked: 1 },
       { date: "2024-11-18", hoursWorked: 7 },
       { date: "2024-11-17", hoursWorked: 11 },
       { date: "2024-11-16", hoursWorked: 7 },
       { date: "2024-11-15", hoursWorked: 1 },

   ]
);
TimeLog.prototype.calculateEarnings = function () {
const totalHours = this.logs.reduce((a, b) => a + b.hoursWorked, 0)
   console.log(totalHours)
  
   const earnings = this.projectDetails.hourlyRate * totalHours
   return earnings;
}
console.log(`You are earning ${freelancer1.calculateEarnings()}`);

TimeLog.prototype.filterLogs = function (initialDate, finalDate) {
    const start = new Date(initialDate);
    const end = new Date(finalDate);
    return this.logs.filter(log => {
        const logDate = new Date(log.date);
        return logDate >= start && logDate <= end;
    });
};

console.log(freelancer1.filterLogs("2024-11-12", "2024-11-15"));

TimeLog.prototype.trackExceededHours = function () {
   
       
const totalHours = this.logs.reduce((a,b) => a + b.hoursWorked,0);
if (totalHours>40){
   return `${this.freelancerName} exceeded 40 hours at work this week.`
}
else{
  return `${this.freelancerName} did not exceed 40 hours at work this week.`

  } 
}

console.log(freelancer1.trackExceededHours())

//Question 3


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
   
)
Order.prototype.calculateBill = function () {
    const bill = this.items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
    return bill;
 };
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

console.log(firstOrder.updateOrderStatus(true));
console.log(firstOrder.categorizeOrder());
console.log(firstOrder);


//Question 4


class Employee {
    constructor(id,name,performanceMetrics,feedback){
    this.id = id,
    this.name=name,
    this.performanceMetrics = performanceMetrics,
    this.feedback = feedback
    }
 }
 const firstEmployee = new Employee (27, "Akeza Saloi",{communication:5,efficiency:8,reliability:6},[]);
 console.log(firstEmployee);
 Employee.prototype.calcAverageScore = function (){
 const scores =  Object.values(this.performanceMetrics);
 const totalScores = scores.reduce((a, b) => a + b, 0);
  return totalScores / scores.length;
 }
 console.log(`Your average score is ${firstEmployee.calcAverageScore()}`);
 Employee.prototype.classifyPerformance = function () {
     const avg = this.calcAverageScore();
     if (avg >= 8) {
        return "Excellent work";
     } else if (avg >= 7) {
        return "Good job";
     } else {
        return "Please improve your performance";
     }
  };
  console.log(`Performance level: ${firstEmployee.classifyPerformance()}`);
  Employee.prototype.addFeedback = function (feedbackMessage) {
     const avg = this.calcAverageScore();
     if (avg >= 7) {
        this.feedback.push(feedbackMessage);
        return "Feedback given";
     } else {
        return "No feedback given, employee unqualified";
     }
 };
  console.log(firstEmployee.addFeedback("Excellent work on your project!"));
  console.log(firstEmployee.feedback);
 
 
 
//  Question 5


class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.students = [];
    }
    enrollStudent(studentName, hasCompleted) {
        this.students.push({ studentName, hasCompleted });
    }
    completedStudentNames() {
        return this.students
            .filter(s => s.hasCompleted)
            .map(s => s.studentName);
    }
    countEnrolled() {
     
        return { [this.instructor.expertise]: this.students.length };
    }
    instructorNotice() {
        if (this.students.length > 5) {
            return `${this.instructor.name} has a large class with ${this.students.length} students.`;
        } else {
            return `${this.instructor.name} has a class with ${this.students.length} students.`;
        }
    }
}


const instructor = { name: "Cromwel", expertise: "QA" };
const qaCourse = new Course("Quality Assurance", instructor);
qaCourse.enrollStudent("Akeza", true);
qaCourse.enrollStudent("Saloi", false);
qaCourse.enrollStudent("Judy", true);
qaCourse.enrollStudent("Helen", true);

console.log(qaCourse.completedStudentNames()); 
console.log(qaCourse.countEnrolled());         
console.log(qaCourse.instructorNotice());  