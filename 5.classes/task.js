class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    this._state = number;
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2. Библиотека

class Library extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.books = [];
  }

  addBook(book) {
   if (this.state > 30) {
    this.books.push(book);
   }
  }

  findBookBy(type, value) {
     let serp = this.books.find(element => element[type] === value);
     if(serp){
      return serp;
     }
     return null; 
  }

  giveBookByName(bookName) {
    let findbook = this.findBookBy("name", bookName);
    if (findbook) {
      for (var i = 0; i < this.books.length; i++) {
        if(this.books[i].name === bookName) {
          this.books.splice(i,1);
        } 
      }
      return findbook;
    }
    return null;
  }

}