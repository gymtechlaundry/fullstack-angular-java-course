"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
let myCoaches = [];
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);
for (let coach of myCoaches) {
    console.log(coach.getDailyWorkout());
}
