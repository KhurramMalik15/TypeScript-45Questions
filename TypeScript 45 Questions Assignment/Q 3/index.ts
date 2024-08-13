// Question : 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="Muhammad Khurram Malik";

// For LowerCase //
console.log("LowerCase : ", personName.toLowerCase());

// For UpperCase //
console.log("UpperCase :", personName.toUpperCase());

//For TitleCase //
console.log("TitleCase :", personName.replace(/\bw/g,c => c.toUpperCase()));






