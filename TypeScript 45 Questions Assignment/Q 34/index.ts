// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let fav_pizzas:string[]=["Pepperoni Pizza","Mexican Pizza","Cheese Pizza"];

for (let index = 0; index < fav_pizzas.length; index++) {
    console.log(`I Like To Eat ${fav_pizzas[index]} ! `)
}

console.log("\nI Really Like Pizzas ! Pizza Is An Italian Food That Was Created In Italy (The Naples Area). It Is Made With Different Toppings And Individual Loves . Some Of The Most Common Toppings Are Cheese, Sausages, Pepperoni, Vegetables, Tomatoes, Spices And Herbs And Basil.So I Really Love Pizzas Sooo Much !");

