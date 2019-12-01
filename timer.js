"use sctrict";

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]')
};

class CountDownTimer {
  constructor({ selector, targetDate }) {
    (this.container = document.querySelector(selector)),
      (this.time = targetDate);
  }

  getTime() {
    const finishTime = this.time;
    this.interval = setInterval(() => {
      const startTime = Date.now();
      const countTime = finishTime - startTime;
      this.updateClocKFace(countTime);
    }, 1000);
  }

  updateClocKFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const newCountDownTimer = new CountDownTimer({
  selector: "#tamer-1",
  targetDate: new Date("Jan 01, 2020")
});

newCountDownTimer.getTime();
