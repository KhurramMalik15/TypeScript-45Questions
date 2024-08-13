// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currrent_users:string[]=['Wahaj','Rohan','Alyan','Safwan','Rafee'];
let new_users:string[]=['Fahad','Alyan','Ali','Shoaib','Safwan']

new_users.forEach((newUser)=>{
    if (currrent_users.some
    (
         (currrent_users)=>currrent_users.toLowerCase()===newUser.toLowerCase()
    ))
    {
        console.log(`${newUser} Will Need To Enter New User Names.`);
    }
    else{
        console.log(`${newUser} Is Available.`);
    }
})
