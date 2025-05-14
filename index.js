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

// function TimeLog(freelancerName, projectDetails, logs) {
//    this.freelancerName = freelancerName
//    this.projectDetails = projectDetails
//    this.logs = logs
// }



// TimeLog.prototype.totalEarnings = function () {
//    const totalHoursWorked = this.logs.reduce((sum, hours) => sum + hours.hoursWorked, 0)
//    console.log(totalHoursWorked)

//    const earnings = this.projectDetails.rate * totalHoursWorked
//    console.log(earnings)



// }


// TimeLog.prototype.filteredlogs = function (startDate, endDate) {
//    return this.logs.filter(entry => {
//        const logDate = new Date(entry.date);
//        return logDate >= new Date(startDate) && logDate <= new Date(endDate);
//    });

// }

// TimeLog.prototype.exceededWeeklyHours = function () {
   
       
//         const weeklyHours = this.logs.reduce((sum,log) => sum + log.hoursWorked,0);
//         if (weeklyHours>40){
//            return `${this.freelancerName}:Worked more than 40 hours this week`
//         }else{
//            return `${this.freelancerName}:Worked less than 40 hours this week`

//         } 
// }




// const freelancer1 = new TimeLog("Tierra Lebbie", { name: "Tierra Lebbie", rate: 1000 },
//    [
//        { date: "2025-02-15", hoursWorked: 10 },
//        { date: "2025-02-16", hoursWorked: 2 },
//        { date: "2025-03-17", hoursWorked: 3 },
//        { date: "2025-03-18", hoursWorked: 4 },
//        { date: "2025-03-19", hoursWorked: 5 },
//        { date: "2025-03-20", hoursWorked: 6 },
//        { date: "2025-03-21", hoursWorked: 7 },
//        { date: "2025-03-22", hoursWorked: 8 },

//    ]
// )

// freelancer1.totalEarnings()
// console.log(freelancer1.filteredlogs("2025-05-15", "2025-03-27"))
// console.log(freelancer1.exceededWeeklyHours())

// // Question 3

// function Order(customer, items, status) {
//    this.customer = customer
//    this.items = items
//    this.status = status
// }

// Order.prototype.totalCost = function () {
//    const total = this.items.reduce((sum, item) => sum + item.unitPrice, 0)
//    return total
// }

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
// const order1 = new Order({ name: "Umutoni", email: "umutoni@example.com" },
//    [
//        { productName: "Yorghurt", quantity: 10, unitPrice: 1600 },
//        { productName: "Ice cream", quantity: 50, unitPrice: 1000 },
//        { productName: "Armis", quantity: 20, unitPrice: 40 },
//        { productName: "Milk", quantity: 100, unitPrice: 1000 },
//        { productName: "Oats", quantity: 10, unitPrice: 500 }
//    ],
//    ""
// )
// console.log(order1)
// console.log(order1.totalCost())
// console.log(order1.updateStatus("yes"))
// console.log(order1.orderUrgency())


// //Question 4

// class Employee {
//    constructor(id,name,performanceMetrics,feedback){
//    this.id = id,
//    this.name=name,
//    this.performanceMetrics = performanceMetrics,
//    this.feedback = feedback
//    }
// }

// Employee.prototype.averageMarks= function (){

//    const average = Object.values(this.performanceMetrics)
//    return   average.reduce((a,b) => a+b,0)/average.length

// }

// Employee.prototype.performanceLevel = function (){
//    const average = this.averageMarks()
//    if(average>=7){
//        return "Excellent"
//    }else if (average >=5  && average <7){
//        return "Very good"
//    }else{
//        return "Good"
//    }
// }

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



// const employee1 = new Employee (
//    1, "Queen Carine",
//    {communication:5,effiecincy:8,reliabity:6},
//   []
// )

// console.log(employee1.averageMarks())
// console.log(employee1.performanceLevel())
// console.log(employee1.moreFeedback())
// console.log(employee1)




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