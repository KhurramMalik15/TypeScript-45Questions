"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(ArtistName, Albumtitle) {
    return { ArtistName, Albumtitle };
}
let album1 = make_album("Adjusters", "Before The Revolution");
let album2 = make_album("Aerosmith", "Big Ones");
let album3 = make_album("Aerosmith", "Get A Gip");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(ArtistName, Albumtitle, NumberOfTracks) {
    return { ArtistName, Albumtitle, NumberOfTracks };
}
let album4 = make_album2("Anti_Flag", " For Blood And Empire", 22);
let album5 = make_album2("Avali", "Dixie", 45);
let album6 = make_album2("Army Of Juan", "Self Title", 56);
console.log(album4);
console.log(album5);
console.log(album6);
