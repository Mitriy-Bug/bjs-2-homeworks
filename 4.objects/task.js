function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
	if (this.marks) {
	  if (marksToAdd.length) {
	    this.marks.push(...marksToAdd);
	  }
	}
}

Student.prototype.getAverage = function () {
	if (this.marks) {
	  if (this.marks.length) {
	    const initialValue = 0;
	  	return this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) / this.marks.length;
	  }
	}
    return 0;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
  this.excluded = reason;
}
