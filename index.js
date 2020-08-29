/*
FizzBuzz

By Tom Scott
Code in video: https://www.youtube.com/watch?v=QPZ0pIK_wsc#t=5m7s
Rewritten by GD Matto58

NOTE: ALWAYS RUN IN NODE.JS!
*/

for (var i = 1; i <= 100; i++) {
  if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }

  else {
    console.log(i);
  }
}
