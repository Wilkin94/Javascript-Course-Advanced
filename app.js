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