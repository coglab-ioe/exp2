//////////////// Task 1_ : one-touch (outside)
canvas_span = 1.0; // 1.0 means the canvas being 100% width
DEFAULT_RADIUS = 30;
DEFAULT_COUNTDOWN = 0;
TOUCH_MOVE_TIMEOUT = 200;

// Task 1_1: one-touch (outside) in 0 degree
var startingPoint1_1 = new Point(500,300);
var endingPoint1_1 = new Point(500+200,300);
var trajectory1_1 = new Trajectory(startingPoint1_1,endingPoint1_1,20);
var task1_1 = new Task("one-touch (outside) in 0 degree", [trajectory1_1]);

// Task 1_2: one-touch (outside) in 45 degree
var startingPoint1_2 = new Point(500,300);
var endingPoint1_2 = new Point(500+200/1.414,300-200/1.414);
var trajectory1_2 = new Trajectory(startingPoint1_2,endingPoint1_2,20);
var task1_2 = new Task("one-touch (outside) in 45 degree", [trajectory1_2]);

// Task 1_3: one-touch (outside) in 90 degree
var startingPoint1_3 = new Point(500,300);
var endingPoint1_3 = new Point(500,300-200);
var trajectory1_3 = new Trajectory(startingPoint1_3,endingPoint1_3,20);
var task1_3 = new Task("one-touch (outside) in 90 degree", [trajectory1_3]);

// Task 1_4: one-touch (outside) in 135 degree
var startingPoint1_4 = new Point(500,300);
var endingPoint1_4 = new Point(500-200/1.414,300-200/1.414);
var trajectory1_4 = new Trajectory(startingPoint1_4,endingPoint1_4,20);
var task1_4 = new Task("one-touch (outside) in 135 degree", [trajectory1_4]);

// Task 1_5: one-touch (outside) in 180 degree
var startingPoint1_5 = new Point(500,300);
var endingPoint1_5 = new Point(500-200,300);
var trajectory1_5 = new Trajectory(startingPoint1_5,endingPoint1_5,20);
var task1_5 = new Task("one-touch (outside) in 180 degree", [trajectory1_5]);

// Task 1_6: one-touch (outside) in 225 degree
var startingPoint1_6 = new Point(500,300);
var endingPoint1_6 = new Point(500-200/1.414,300+200/1.414);
var trajectory1_6 = new Trajectory(startingPoint1_6,endingPoint1_6,20);
var task1_6 = new Task("one-touch (outside) in 225 degree", [trajectory1_6]);

// Task 1_7: one-touch (outside) in 270 degree
var startingPoint1_7 = new Point(500,300);
var endingPoint1_7 = new Point(500,300+200);
var trajectory1_7 = new Trajectory(startingPoint1_7,endingPoint1_7,20);
var task1_7 = new Task("one-touch (outside) in 270 degree", [trajectory1_7]);

// Task 1_8: one-touch (outside) in 315 degree
var startingPoint1_8 = new Point(500,300);
var endingPoint1_8 = new Point(500+200/1.414,300+200/1.414);
var trajectory1_8 = new Trajectory(startingPoint1_8,endingPoint1_8,20);
var task1_8 = new Task("one-touch (outside) in 315 degree", [trajectory1_8]);

//////////////// Task 2_ : two-touch (pinch)

// Task 2_1: two-touch (pinch) in 0 degree
var startingPoint2_1_1 = new Point(500+200,300);
var endingPoint2_1_1 = new Point(500+30,300);
var startingPoint2_1_2 = new Point(500-200,300);
var endingPoint2_1_2 = new Point(500-30,300);
var trajectory2_1_1 = new Trajectory(startingPoint2_1_1,endingPoint2_1_1,20);
var trajectory2_1_2 = new Trajectory(startingPoint2_1_2,endingPoint2_1_2,20);
var task2_1 = new Task("two-touch (pinch) in 0 degree", [trajectory2_1_1, trajectory2_1_2]);

// Task 2_2: two-touch (pinch) in 45 degree
var startingPoint2_2_1 = new Point(500+200/1.414,300-200/1.414);
var endingPoint2_2_1 = new Point(500+30/1.414,300-30/1.414);
var startingPoint2_2_2 = new Point(500-200/1.414,300+200/1.414);
var endingPoint2_2_2 = new Point(500-30/1.414,300+30/1.414);
var trajectory2_2_1 = new Trajectory(startingPoint2_2_1,endingPoint2_2_1,20);
var trajectory2_2_2 = new Trajectory(startingPoint2_2_2,endingPoint2_2_2,20);
var task2_2 = new Task("two-touch (pinch) in 45 degree", [trajectory2_2_1, trajectory2_2_2]);

// Task 2_3: two-touch (pinch) in 90 degree
var startingPoint2_3_1 = new Point(500,300-200);
var endingPoint2_3_1 = new Point(500,300-30);
var startingPoint2_3_2 = new Point(500,300+200);
var endingPoint2_3_2 = new Point(500,300+30);
var trajectory2_3_1 = new Trajectory(startingPoint2_3_1,endingPoint2_3_1,20);
var trajectory2_3_2 = new Trajectory(startingPoint2_3_2,endingPoint2_3_2,20);
var task2_3 = new Task("two-touch (pinch) in 90 degree", [trajectory2_3_1, trajectory2_3_2]);

// Task 2_4: two-touch (pinch) in 135 degree
var startingPoint2_4_1 = new Point(500-200/1.414,300-200/1.414);
var endingPoint2_4_1 = new Point(500-30/1.414,300-30/1.414);
var startingPoint2_4_2 = new Point(500+200/1.414,300+200/1.414);
var endingPoint2_4_2 = new Point(500+30/1.414,300+30/1.414);
var trajectory2_4_1 = new Trajectory(startingPoint2_4_1,endingPoint2_4_1,20);
var trajectory2_4_2 = new Trajectory(startingPoint2_4_2,endingPoint2_4_2,20);
var task2_4 = new Task("two-touch (pinch) in 135 degree", [trajectory2_4_1, trajectory2_4_2]);

//////////////// Task 3_ : two-touch (spread)

// Task 3_1: two-touch (spread) in 0 degree
var startingPoint3_1_1 = new Point(500+30,300);
var endingPoint3_1_1 = new Point(500+200,300);
var startingPoint3_1_2 = new Point(500-30,300);
var endingPoint3_1_2 = new Point(500-200,300);
var trajectory3_1_1 = new Trajectory(startingPoint3_1_1,endingPoint3_1_1,20);
var trajectory3_1_2 = new Trajectory(startingPoint3_1_2,endingPoint3_1_2,20);
var task3_1 = new Task("two-touch (spread) in 0 degree", [trajectory3_1_1, trajectory3_1_2]);

// Task 3_2: two-touch (spread) in 45 degree
var startingPoint3_2_1 = new Point(500+30/1.414,300-30/1.414);
var endingPoint3_2_1 = new Point(500+200/1.414,300-200/1.414);
var startingPoint3_2_2 = new Point(500-30/1.414,300+30/1.414);
var endingPoint3_2_2 = new Point(500-200/1.414,300+200/1.414);
var trajectory3_2_1 = new Trajectory(startingPoint3_2_1,endingPoint3_2_1,20);
var trajectory3_2_2 = new Trajectory(startingPoint3_2_2,endingPoint3_2_2,20);
var task3_2 = new Task("two-touch (spread) in 45 degree", [trajectory3_2_1, trajectory3_2_2]);

// Task 3_3: two-touch (spread) in 90 degree
var startingPoint3_3_1 = new Point(500,300-30);
var endingPoint3_3_1 = new Point(500,300-200);
var startingPoint3_3_2 = new Point(500,300+30);
var endingPoint3_3_2 = new Point(500,300+200);
var trajectory3_3_1 = new Trajectory(startingPoint3_3_1,endingPoint3_3_1,20);
var trajectory3_3_2 = new Trajectory(startingPoint3_3_2,endingPoint3_3_2,20);
var task3_3 = new Task("two-touch (spread) in 90 degree", [trajectory3_3_1, trajectory3_3_2]);

// Task 3_4: two-touch (spread) in 135 degree
var startingPoint3_4_1 = new Point(500-30/1.414,300-30/1.414);
var endingPoint3_4_1 = new Point(500-200/1.414,300-200/1.414);
var startingPoint3_4_2 = new Point(500+20/1.414,300+20/1.414);
var endingPoint3_4_2 = new Point(500+200/1.414,300+200/1.414);
var trajectory3_4_1 = new Trajectory(startingPoint3_4_1,endingPoint3_4_1,20);
var trajectory3_4_2 = new Trajectory(startingPoint3_4_2,endingPoint3_4_2,20);
var task3_4 = new Task("two-touch (spread) in 135 degree", [trajectory3_4_1, trajectory3_4_2]);

//////////////// Task 4_ : one-touch (inside)

// Task 4_1: one-touch (inside) in 0 degree
var startingPoint4_1 = new Point(500+200,300);
var endingPoint4_1 = new Point(500+30,300);
var trajectory4_1 = new Trajectory(startingPoint4_1,endingPoint4_1,20);
var task4_1 = new Task("one-touch (inside) in 0 degree", [trajectory4_1]);

// Task 4_2: one-touch (inside) in 45 degree
var startingPoint4_2 = new Point(500+200/1.414,300-200/1.414);
var endingPoint4_2 = new Point(500+30/1.414,300-30/1.414);
var trajectory4_2 = new Trajectory(startingPoint4_2,endingPoint4_2,20);
var task4_2 = new Task("one-touch (inside) in 45 degree", [trajectory4_2]);

// Task 4_3: one-touch (inside) in 90 degree
var startingPoint4_3 = new Point(500,300-200);
var endingPoint4_3 = new Point(500,300-30);
var trajectory4_3 = new Trajectory(startingPoint4_3,endingPoint4_3,20);
var task4_3 = new Task("one-touch (inside) in 90 degree", [trajectory4_3]);

// Task 4_4: one-touch (inside) in 135 degree
var startingPoint4_4 = new Point(500-200/1.414,300-200/1.414);
var endingPoint4_4 = new Point(500-30/1.414,300-30/1.414);
var trajectory4_4 = new Trajectory(startingPoint4_4,endingPoint4_4,20);
var task4_4 = new Task("one-touch (inside) in 135 degree", [trajectory4_4]);



exp1 = [
  task1_1, task1_2, task1_3, task1_4, task1_5, task1_6, task1_7, task1_8
]

exp2 = [
  task2_1, task2_2, task2_3, task2_4
]

exp3 = [
 task3_1, task3_2, task3_3, task3_4
]

exp4 = [
  task4_1, task4_2, task4_3, task4_4
]

exp_sets = [exp1, exp2, exp3, exp4];
