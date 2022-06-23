const UserList = [
    {
        id: 1,
        name: 'Adam Scott',
        username: 'adam',
        age: 20,
        nationality:'Canada',
        friends: [{
            id: 2,
            name: 'Pedro Scott',
            username: 'Pedro',
            age: 30,
            nationality:'Brazil'
        }]
    },
    {
        id: 2,
        name: 'Pedro Scott',
        username: 'Pedro',
        age: 30,
        nationality:'Brazil'
    },
    {
        id: 3,
        name: 'Oscar Scott',
        username: 'oscar',
        age: 40,
        nationality:'Germany',
        friends: [{
            id: 5,
            name: 'Silver Scott',
            username: 'silver',
            age: 60,
            nationality:'Nigeria'
        },
        {
            id: 4,
            name: 'Mount Scott',
            username: 'mount',
            age: 50,
            nationality:'England'
        }
    ]
    },
    {
        id: 4,
        name: 'Mount Scott',
        username: 'mount',
        age: 50,
        nationality:'England'
    },
    {
        id: 5,
        name: 'Silver Scott',
        username: 'silver',
        age: 60,
        nationality:'Nigeria'
    }
];

 const MovieList = [
    {
        id: 1,
        name: 'The Shawshank Redemption',
        yearOfPublication: 1994,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'The Godfather',
        yearOfPublication: 1972,
        isInTheaters: true
    },
    {
        id: 3,
        name: 'The Godfather: Part II',
        yearOfPublication: 1974,
        isInTheaters: true
    },
    {
        id: 4,
        name: 'The Dark Knight',
        yearOfPublication: 2008,
        isInTheaters: true
    },
    {
        id:5,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
]


export {UserList, MovieList}