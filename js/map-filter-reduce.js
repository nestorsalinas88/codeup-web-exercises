

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];


let three = users.filter(users => users.languages.length > 2);
console.log((three));



//map method helps you get specified data
let hey = users.map(users => users.email);
console.log(hey);

// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

console.log(users);


const marked = users.reduce((id, user) => {
    id[user.id] = user;
    return id;
//    start mark
}, {});

console.log(marked);
