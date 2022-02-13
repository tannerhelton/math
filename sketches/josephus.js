var RUN = false;
var TIME = 0;
function setup() {
  var myCanvas = createCanvas(
    document.getElementById("josephus").offsetWidth,
    400
  );
  myCanvas.parent("josephus");
}

function draw() {
  background(255);
  translate(document.getElementById("josephus").offsetWidth / 2, 200);
  noFill();
  circle(0, 0, 300);
  fill(0);
  var soldierCount = document.getElementById("soldierCount").value;
  var positions = circlePos(soldierCount);
  for (var i = 0; i < soldierCount; i++) {
    circle(positions[i].x, positions[i].y, 10);
  }
  if (RUN) {
    josephusKill(positions, TIME);
    TIME++;
  }
}

function josephusKill(pos, t) {
  var killNum = 1;
  for (var i = 0; i < killNum; i++) {
    fill(255, 0, 0);
    circle(pos[i].x, pos[i].y, 7);
  }
  if (t % 100 == 0) {
    killNum++;
  }
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

function run() {
  RUN = true;
}
function stop() {
  RUN = false;
}

function sleep(millisecondsDuration) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  });
}
