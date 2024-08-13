 // They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 console.log(`\nNames Of Famous Books Names With Their Authors Are :\n`);
interface items{
    bookname:string
    author:string
}

let book1:items={
  bookname:'War and Peace',
  author:'Leo Tolstoy'
};

let book2:items={
    bookname:'Ulysses',
    author:'James Joyce'
};

let book3:items={
    bookname:'Time Machine',
    author:'H.G Wells'
}
console.log(`NAME : ${book1.bookname}\nAUTHOR : ${book1.author}\n`);
console.log(`NAME : ${book2.bookname}\nAUTHOR : ${book2.author}\n`);
console.log(`NAME : ${book3.bookname}\nAUTHOR : ${book3.author}\n`);