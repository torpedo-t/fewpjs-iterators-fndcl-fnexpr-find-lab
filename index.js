// write a function called superbowlWin() that receives 1 argument, an array of js objects
// each object has two properties year and result
// use find() to test each object to see if the result is "w"
// return element.year when the element.result = "w" || element.result = "W"
function superbowlWin(record) {
    // code to be executed  
    let winner = record.find(element => element.result === "W");
    return winner ? winner.year : undefined
    // console.log("i am hereeeee", winner)
  }