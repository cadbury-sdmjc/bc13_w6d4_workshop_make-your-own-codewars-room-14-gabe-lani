//The SoC squat leaderboard
//Write a function that takes in an array of SoC coaches and their squat scores, and returns a leaderboard of the top three - their name and score, ranked lowest to highest score
//
//
import { coaches } from "./main.test";

export function squatLeaders(coaches){
    //look at the score property of each coach in the array
    //for loop to iterate through the array
    //array[i].score ?
    //order the scores starting with lowest, ending with highest
    coaches.sort((a, b) => {
    return a.score - b.score;
});
}
  


