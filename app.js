var speed = 70;

var downLimit = speed > 60;
var topLimit = speed < 120;

var isInRange = downLimit && topLimit;
console.log (isInRange);
