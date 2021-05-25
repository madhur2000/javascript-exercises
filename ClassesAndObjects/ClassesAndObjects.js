class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.courses = [];
    }

    getInfo(){
        return {name:this.name, email:this.email};
    }

    enrollCourse(courseName){
        this.courses.push(courseName);
    }

    getCourseList(){
        return this.courses;
    }
}

module.exports = User;
