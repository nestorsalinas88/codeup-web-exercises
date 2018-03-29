// (function() {
//     "use strict";
//
// //You can also use array access notation which specifies the objects properties with in []
//
//
// //    OBJECT LITERAL
// var person = {
//     firstName: "Nestor",
//     lastName: "Salinas",
//     sayHello: function () {
//         return "Hello from " + this.firstName + " " + this.lastName;
//     }
// };
//     console.log(person.firstName);
//     console.log(person.lastName);
//
// //    dot notation method
// var anotherPerson = {};
// anotherPerson.firstName = "Spider";
// anotherPerson.lastName = "Man";
// anotherPerson.sayHello = function() {
//     return "Hello from " + this.firstName + " " + this.lastName;
// };
//
// console.log(anotherPerson.firstName + " " + anotherPerson.lastName);
//
//
//     console.log(person.sayHello());
//     console.log(anotherPerson.sayHello());
//
//
//     // anything over $200 gets a 12% discount
//     //conditionals and functions are allowed for this exercise
//     //cameron $180, Ryan $250, George $320
//     //program must display a line with name, amount before and after, discount amount
//
//
//
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
//     shoppers.forEach(function(shopper) {
//
//         if(shopper.amount > 200){
//             var discountAmount = shopper.amount * .12;
//             shopper.amount = shopper.amount - discountAmount;
//             var total = shopper.amount + discountAmount;
//
//         }
//         console.log(shopper.name + " spent $" + shopper.amount);
//         console.log(shopper.name + " received a discount of $" + discountAmount);
//         console.log(shopper.name + "'s original total amount was $" + total);
//     });
//
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
// //    The pragmatic programmer, refactoring, clean code, 97 things every programmer should know, test driven dev by example
// var books = [
//         {
//         title: 'Eloquent JavaScript',
//         author:{
//             firstName: "Marjin",
//             lastName: "Haverbeke"
//             }
//         },
//         {
//             title: 'JavaScript: The Definite Guide',
//             author:{
//                 firstName: "David",
//                 lastName: "Flanagan"
//             }
//         },
//         {
//             title: 'JavaScript: The Good Parts',
//             author:{
//                 firstName: "Douglas",
//                 lastName: "Crockford"
//             }
//         },
//         {
//             title: 'ES6 and Beyond',
//             author:{
//                 firstName: "Kyle",
//                 lastName: "Simpson"
//             }
//         },
//         {
//             title: 'JavaScript and JQuery',
//             author:{
//                 firstName: "Jon",
//                 lastName: "Duckett"
//             }
//         }
// ];
//
//     books.forEach(function(a, b) {
//         var output = "";
//         output += "Book # " + (b + 1) + "\n";
//         output +=  "Title: " + a.title + "\n";
//         output += "Author: " + a.author.firstName + " " + a.author.lastName + "\n";
//         output += "---\n";
//         console.log(output);
//     });
//
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//
//     //new books
//     function newBooks(title, author) {
//         var nameArray = author.split(" ");
//         var firstName = nameArray[0];
//         var lastName = nameArray[1];
//         return {
//             title: title,
//             author: {
//                 firstName: firstName,
//                 lastName: lastName
//             }
//         }
//     }
// console.log(newBooks("JavaScript Patterns", "Stoyan Stefanov"));
//
//     // Create books array using calls to createBook() function
//      books = [
//         newBooks("Effective JS", "Unknown last"),
//         newBooks("JS ninja", "Unknown last"),
//         newBooks("Speaking JavaScript", "Unknown last"),
//         newBooks("JS for dummies", "Unknown last"),
//         newBooks("A smarter way to learn JS", "Unknown")
//     ];
//
//     console.log(books);
//
//     // Create function to showBookInfo()
//     function showBookInfo(book, index) {
//         var output = "Title: " + book.title + "\n";
//         output += "Author: " + book.author.firstName + " " + book.author.lastName  + "\n";
//         output += "---";
//         return output;
//     }
//
//     // Use showBookInfo() to log book objects using forEach loop
//     books.forEach(function(book, index) {
//         console.log("Book # " + (index + 1) + "\n");
//         console.log(showBookInfo(book));
//     });
//
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
// })();

function average(num) {
    var sum;
    sum = (num)[0] + num[1] + num[2] + num [3];
    var avr;
    return avr = (num) / num.length;

}

average([1,2,3]);
console.log(average());