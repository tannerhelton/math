var positions;
var RUN = false;
var TIME = 1;
function setup() {
  var myCanvas = createCanvas(
    document.getElementById("josephus").offsetWidth,
    400
  );
  myCanvas.parent("josephus");
  translate(document.getElementById("josephus").offsetWidth / 2, 200);
  rotate((3 * PI) / 2);
  background(255);
  clearScreen();
}
var count = 1;
function draw() {
  TIME++;
  translate(document.getElementById("josephus").offsetWidth / 2, 200);
  rotate((3 * PI) / 2);
  if (RUN) {
    if (TIME % 100 == 0) {
      fill(255, 0, 0);
      circle(
        positions[count % positions.length].x,
        positions[count % positions.length].y,
        10
      );
      count += 2;
    }
  }
}
function clearScreen() {
  RUN = false;
  background(255);
  noFill();
  circle(0, 0, 300);
  fill(200);
  var soldierCount = document.getElementById("soldierCount").value;
  positions = circlePos(soldierCount);
  for (var i = 0; i < soldierCount; i++) {
    circle(positions[i].x, positions[i].y, 10);
  }
}

function run() {
  RUN = true;
}

function circlePos(num) {
  var pos = [];
  for (var i = 1; i <= num; i++) {
    var theta = (Math.PI * 2) / num;
    var angle = theta * i;
    var point = {};
    point.x = 150 * Math.cos(angle);
    point.y = 150 * Math.sin(angle);
    pos.push(point);
  }
  return pos;
}

function runJosephus(input) {
  // if (input == 1) return 1;
  // if (input == 2) return 1;
  // return input % 2 == 0
  //   ? 2 * runJosephus(input / 2) - 1
  //   : 2 * runJosephus((input - 1) / 2) + 1;
  if (input == 1) {
    document.getElementById("resultsForJosephus").innerHTML += "<br>T(1)=1";
    return 1;
  }
  if (input == 2) {
    document.getElementById("resultsForJosephus").innerHTML += "<br>T(2)=1";
    return 2;
  }
  if (input % 2 == 0) {
    var val = 2 * runJosephus(input / 2) - 1;
    document.getElementById("resultsForJosephus").innerHTML +=
      "<br>T(" + input + ")=" + val;
    return val;
  } else {
    var val = 2 * runJosephus((input - 1) / 2) + 1;
    document.getElementById("resultsForJosephus").innerHTML +=
      "<br>T(" + input + ")=" + val;
    return val;
  }
}
