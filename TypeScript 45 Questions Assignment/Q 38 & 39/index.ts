/* -------------------------------------------------- *** ------------------------------------------------------*/
//*   Qusetion no : 38   *//
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
/* -------------------------------------------------- *** ------------------------------------------------------*/

// 38 . " CITIES "  //

function describe_city(city :string , country :string = "Pakistan"){
    console.log(`${city} Is In ${country}`);
};

describe_city("Islamabad");
describe_city("Sawat");
describe_city("Istanbul");
/* -------------------------------------------------- *** ------------------------------------------------------*/




/* -------------------------------------------------- *** ------------------------------------------------------*/
//*   Qusetion no : 39   *//
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
/* -------------------------------------------------- *** ------------------------------------------------------*/

// 39 . " CITY NAMES " //

function city_country(city : string , country:string){
    let info = `\n"${city} , ${country}"`
    return info
}
console.log(city_country("UAE" , "Abu Dhabi"));
console.log(city_country("Swetzerland" , "Bern"));
console.log(city_country("Oman" , "Muscat"));
/* -------------------------------------------------- *** ------------------------------------------------------*/
