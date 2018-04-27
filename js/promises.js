"use strict";

//promises have dependency

let promisetoclean = new Promise(function(resolve, reject){
    let isclean = false;

    if(isclean){
        resolve('Clean');
    } else{
        reject('Not Clean');
    }
});

 promisetoclean.then(function (fromresolve) {
     console.log('the room is clean ' + fromresolve);
 }).catch(function (fromReject) {
   console.log('the room is ' + fromReject)
 });


 //another example of dependencies

let cleanRoom= function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned the room');
    });
};


let removeTheGarbage = function(message){
    return  new Promise(function (resolve, reject) {
        resolve(message + 'removed garbage ');
    });

};


let winIcecream = function(message){
    return new Promise(function (resolve,reject) {
        resolve( message + 'got ice cream');
    });
};

cleanRoom().then(function (result) {
    return removeTheGarbage(result);
}).then(function (result) {
    return winIcecream(result)
}).then(function (result) {
    console.log('Youre are done' + result);
});




// promisetoclean.then(function (fromresolve) {
//     console.log('the room is clean ' + fromresolve);
// }).catch(function (fromReject) {
//     console.log('the room is ' + fromReject)
// });



// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function wait(number) {
    const hello = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, number)

    });
    return hello;
}
wait(1000).then(() => console.log('Awesome!'));
wait(3000).then(() => console.log('you suck!'));

//
// const wait = parameter => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         resolve();
//
//         }, parameter);
//     });
// };
//
//
// wait(1000).then(() => console.log('Awesome!'));
// wait(3000).then(() => console.log('you suck!'));
//


// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})


// function getCommit(username) {
//     fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': 'token 96665ace2dafbf4b3a566428d7217da978146d97'}})
//         .then((response => {
//             const users = response.json().then((users) => {
//                 const username = users.map(user => user.login);
//
//                 console.log(`${username}'s last commit was on ${users[0].created_at}`);
//                 // user.forEach((username)) => {
//                 //     console.log(`https://api.github.com/users/${username}/events/public`)
//                 // });
//             });
//
//         });
// }

function getLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': ' 96665ace2dafbf4b3a566428d7217da978146d97'}}).then((response) => {
        const users = response.json().then((users) => {
            const usernames = users.map(user => user.login);
            console.log(`${username}'s last commit was on ${users[0].created_at}`);
            usernames.forEach((username) => {
                // console.log(`https://api.github.com/users/${username}/events/public`);
            });
        });
    });
}
// getUsername().then((usernames) => {
//     usernames.forEach((username) => {
//
//     });
// }).catch(error => console.error(error));


getLastCommit('briantorluemke');


//
// const request = fetch('https://api.github.com/users/${username}/events/public', {
//     headers: {'Authorization': ' 96665ace2dafbf4b3a566428d7217da978146d97'}
// });
//
// request
//     .then(response => response.json())
//     .then(publicEvents => console.log(publicEvents[0].created_at))
// ;
//
// request.catch(error => console.log(error))
