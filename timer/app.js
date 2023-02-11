// class Timer {
//   constructor(
//     durationInput,
//     startButton,
//     pauseButton,
//     stopButton,
//     circle,
//     callbacks
//   ) {
//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;
//     this.circle = circle;
//     if (callbacks) {
//       this.onStart = callbacks.onStart;
//       this.onTick = callbacks.onTick;
//       this.onComplete = callbacks.onComplete;
//     }
//     startButton.addEventListener("click", this.startTimer);
//     pauseButton.addEventListener("click", this.pauseTimer);
//     stopButton.addEventListener("click", this.stopTimer);
//     this.radius = this.circle.getAttribute("r");
//     this.dashArray = this.circle.getAttribute("stroke-dasharrray");
//     // this.offset = this.circle.getAttribute("stroke-dashoffset");
//     this.durationInputValue = this.durationInput.value;
//   }
//   startTimer = () => {
//     this.durationInputValue = this.durationInput.value;
//     this.tick();
//     this.circle.setAttribute(
//       "stroke-dasharray",
//       `${2 * this.radius * Math.PI}`
//     );
//     this.interval = setInterval(this.tick, 10);
//   };
//   tick = () => {
//     const timeRemaining = this.remainingTime;
//     this.animateCircle(timeRemaining, this.radius);
//     if (this.remainingTime > 0) this.remainingTime = timeRemaining - 0.01;
//     if (this.remainingTime == 0) {
//       // this.onComplete();
//       this.stopTimer();
//     }
//   };
//   pauseTimer = () => {
//     clearInterval(this.interval);
//   };
//   stopTimer = () => {
//     clearInterval(this.interval);
//     this.remainingTime = 0;
//     this.onComplete();
//   };
//   get remainingTime() {
//     return parseFloat(this.durationInput.value);
//   }
//   set remainingTime(time) {
//     return (this.durationInput.value = time.toFixed(2));
//   }
//   animateCircle = (timeRemaining, radius) => {
//     this.circle.setAttribute(
//       "stroke-dashoffset",
//       `${
//         ((timeRemaining - 0.01) / this.durationInputValue) *
//         2 *
//         radius *
//         Math.PI
//       }`
//     );
//     // console.log(
//     //   `${-((timeRemaining / this.durationInputValue) * radius)}`,
//     //   timeRemaining,
//     //   radius,
//     //   this.durationInputValue
//     // );
//   };
// }
// const durationInput = document.querySelector("#duration");
// const startButton = document.querySelector("#start-button");
// const pauseButton = document.querySelector("#pause-button");
// const stopButton = document.querySelector("#stop-button");
// const circle = document.querySelector("circle");
// // const perimeter = circle.getAttribute("r") * 2 * Math.PI;
// // circle.setAttribute("stroke-dasharray", perimeter);
// const timer = new Timer(
//   durationInput,
//   startButton,
//   pauseButton,
//   stopButton,
//   circle,
//   {
//     onStart() {
//       console.log("Timer Started");
//     },
//     onTick() {
//       console.log("tick");
//       // circle.setAttribute("stroke-dashoffset");
//     },
//     onComplete() {
//       console.log("complete");
//     },
//   }
// );

class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButton,
    stopButton,
    circle,
    callbacks
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.circle = circle;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    startButton.addEventListener("click", this.startTimer);
    pauseButton.addEventListener("click", this.pauseTimer);
    stopButton.addEventListener("click", this.stopTimer);
    this.durationInputValue = this.durationInput.value;
  }
  startTimer = () => {
    this.durationInputValue = this.durationInput.value;
    this.tick();
    this.interval = setInterval(this.tick, 10);
  };
  tick = () => {
    const timeRemaining = this.remainingTime;
    this.onTick(timeRemaining, this.durationInputValue);
    if (this.remainingTime > 0) this.remainingTime = timeRemaining - 0.01;
    if (this.remainingTime == 0) this.stopTimer();
  };
  pauseTimer = () => {
    clearInterval(this.interval);
  };
  stopTimer = () => {
    clearInterval(this.interval);
    this.remainingTime = 0;
    this.onComplete();
  };
  get remainingTime() {
    return parseFloat(this.durationInput.value);
  }
  set remainingTime(time) {
    return (this.durationInput.value = time.toFixed(2));
  }
}
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
const timer = new Timer(
  durationInput,
  startButton,
  pauseButton,
  stopButton,
  circle,
  {
    onStart() {
      console.log("Timer Started");
    },
    onTick(timeRemaining, durationInputValue) {
      this.circle.setAttribute(
        "stroke-dashoffset",
        `${((timeRemaining - 0.01) / durationInputValue) * perimeter}`
      );
    },
    onComplete() {
      console.log("complete");
    },
  }
);
