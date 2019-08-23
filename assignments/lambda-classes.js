// CODE here for your Lambda Classes
class Person {
  constructor(personObj) {
    this.name = personObj.name;
    this.age = personObj.age;
    this.location = personObj.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(insObj) {
    super(insObj);
    this.specialty = insObj.specialty;
    this.favLanguage = insObj.favLanguage;
    this.catchPhrase = insObj.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(stuObj) {
    super(stuObj);
    this.previousBackground = stuObj.previousBackground;
    this.className = stuObj.className;
    this.favSubjects = stuObj.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }
  PRAssignment(subject) {
    console.log(`student.name has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge for ${subject}`);
  }
}

class PM extends Instructor {
  constructor(pmObj) {
    super(pmObj);
    this.gradClassName = pmObj.gradClassName;
    this.favInstructor = pmObj.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel} @channel standy times!`);
  }
  debugsCodes(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const person1 = new Person({
  name: "P1",
  age: 100,
  location: "NY"
});

const instructor1 = new Instructor({
  name: "I1",
  age: 50,
  location: "DC",
  specialty: "Java",
  favLanguage: "JS",
  catchPhrase: "what's up!"
});

const student1 = new Student({
  name: "S1",
  age: 20,
  location: "LA",
  previousBackground: "art",
  className: "CS1",
  favSubjects: ["JS", "python", "JAVA"]
});

const PM1 = new PM({
  name: "PM1",
  age: 5,
  location: "SA",
  specialty: "COOK",
  favLanguage: "PYTHON",
  catchPhrase: "WELL WELL WELL!",
  gradClassName: "CS4",
  favInstructor: "Brit"
});

person1.speak();
student1.listsSubjects();
student1.sprintChallenge("CSS preprocess");
instructor1.grade(student1, "JS");
PM1.debugsCodes(student1, "DJANGO");
