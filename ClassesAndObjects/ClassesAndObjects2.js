const User = require("./ClassesAndObjects");

const hitesh = new User("Hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());

hitesh.enrollCourse("JS bootcamp");
hitesh.enrollCourse("MERN bootcamp");
hitesh.enrollCourse("Python bootcamp");

console.log(hitesh.getCourseList());

const madhur = new User("Madhur", "madhurrakheja2000@gmail.com");

madhur.enrollCourse("Javascript Course");
madhur.enrollCourse("Full Stack MERN Bootcamp");

console.log(madhur.getInfo());
console.log(madhur.getCourseList());

madhur.getCourseList().forEach((course) => {
    if(course.includes("MERN")){
        console.log("Good Choice Madhur!");
    }
});

hitesh.courses.forEach((course) => {
    if(course.includes("MERN")){
        console.log("Good Choice Hitesh!");
    }
});
