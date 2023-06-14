// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
 return `This Monday, I will ${activity}.`;
}


// Define the function wrapAdjective
function wrapAdjective(flair = "*") {
    // Return another function that takes an adjective as a parameter
    return function(adjective = "special") {
    // Return a string with the adjective wrapped in the flair
    return `You are ${flair}${adjective}${flair}!`;
    }
    }
    
    // Call the wrapAdjective function with no argument and assign it to a variable
    let highlight = wrapAdjective();
    // Call the highlight function with no argument and print the result
    console.log(highlight()); // You are *special*!
    
    // Call the wrapAdjective function with "*" and assign it to a variable
    let star = wrapAdjective("*");
    // Call the star function with "a dedicated programmer" and print the result
    console.log(star("a dedicated programmer")); // You are *a dedicated programmer*!
    
    // Call the wrapAdjective function with "||" and assign it to a variable
    let pipe = wrapAdjective("||");
    // Call the pipe function with "a hard worker" and print the result
    console.log(pipe("a hard worker")); // You are ||a hard worker||!
    
  