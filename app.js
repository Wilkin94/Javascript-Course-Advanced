// Q1. Show Rating

// Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

// showRating(3) -> "* * *"
// showRating(4.5) -> "* * * * ."
// showRating(0.5) -> "."

function showRating(rating) {
    // initialize an empty string
    let ratings = "";
    // loop through the rounded down rating
    for (let i = 0; i < Math.floor(rating); ++i) {
        // add a star for every iteration
        ratings += "*"
        // if its not the last iteration add a space
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
        }
    }
    //if the number is not an integer
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    // return it
    return ratings;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

// Q2. Sort by lowest to highest price

// Given an array of numbers, return the prices sorted by low to high.

//sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]
//sortLowToHigh([5, 10, 0, -5]) -> [-5, 0, 5, 10]
//sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]

function sortLowToHigh(numbers) {
    // the sort method allows you too sort the numbers from low to high or vise versa
    return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// Q3 Sort by highest to lowest price

// Given an array of objects, return the prices sorted by high to low

// sortHighToLow ([
// { id: 1, price: 50},
// { id: 2, price: 30},
// { id: 3, price: 60},
// { id: 4, price: 10},
// ]) ->
// [{ id: 1, price: 60},
// { id: 2, price: 50},
// { id: 3, price: 30},
// { id: 4, price: 10}]

function sortHighToLow(numbers) {
    // you have to target the property ( therefore the property were targeting is the price)
    return numbers.sort((a, b) => b.price - a.price);
}

console.log(
    sortHighToLow([
        { id: 1, price: 50},
        { id: 2, price: 30},
        { id: 3, price: 60},
        { id: 4, price: 10},
    ])
)

// Q5. Finf all the posts by a single user

// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id

// postsByUser(4) ->  console log

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json()

     const posts = result.filter(element => element.userId === userId)

     console.log(posts)
}

postsByUser(4);

// Q6. First 6 Incomplete Todos

// Call this api "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todos from the result

// firstSixIncomplete() -> console log

async function firstSixIncomplete(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(element => !element.completed).slice(0, 6)

    console.log(incompleteTasks)
}

firstSixIncomplete(6);