function parseCount(value) {
  const item = Number.parseFloat(value);
  if (isNaN(item)) {
  	throw new Error("Невалидное значение");
  }
  return item;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.getError("Треугольник с такими сторонами не существует");
  }
  getError(err){
    if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
      throw new Error(err);
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
  	const p = (1/2)*(this.a + this.b + this.c);
    return Number((Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  
  
  try {
    let getTriangle2 = new Triangle(a, b, c);
    return getTriangle2;
  } catch (error) {
    let err = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
    return err;
  }
}