//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.shape = 'round';
stopwatch.color = 'black';
stopwatch.buttons = 3;
stopwatch.brand = 'Timex';

stopwatch.start = function () {
  console.log('stopwatch is starting');
};
stopwatch.stop = function () {
  console.log('stopwatch is stopping');
};
stopwatch.split = function () {
  console.log('BEEP BEEP BEEP');
};
