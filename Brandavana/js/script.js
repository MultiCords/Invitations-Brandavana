
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

var myaudio = document.getElementById("my_audio");
$(document).on('click', function () {
    myaudio.play();
    console.log('Please join us and bless!');
});

const newYearEl = document.getElementById("date");
const daysEl = document.getElementById("days");
const daysElCurr = daysEl.getElementsByClassName("curr");
const daysElNext = daysEl.getElementsByClassName("next");
const hoursEl = document.getElementById("hours");
const hoursElCurr = hoursEl.getElementsByClassName("curr");
const hoursElNext = hoursEl.getElementsByClassName("next");
const minsEl = document.getElementById("mins");
const minsElCurr = minsEl.getElementsByClassName("curr");
const minsElNext = minsEl.getElementsByClassName("next");
const secondsEl = document.getElementById("seconds");
const secondsElCurr = secondsEl.getElementsByClassName("curr");
const secondsElNext = secondsEl.getElementsByClassName("next");

const newYear = new Date().getFullYear() + 1;
let newYearTime = new Date("2024-04-12 00:00:01");
newYearTime = new Date(
  newYearTime.getTime() - new Date().getTimezoneOffset() * 60 * 1000
);

function updateAllCountdowns() {
  const dates = {
    current: {
      elements: [daysElCurr, hoursElCurr, minsElCurr, secondsElCurr],
      values: ["00", "00", "00", "00"]
    },
    next: {
      elements: [daysElNext, hoursElNext, minsElNext, secondsElNext],
      values: ["00", "00", "00", "00"]
    },
    general: {
      elements: [daysEl, hoursEl, minsEl, secondsEl]
    }
  };
  const currentDate = new Date();
  updateCountdown(dates.current, currentDate, true);
  const nextDate = new Date(
    currentDate.setSeconds(currentDate.getSeconds() + 1)
  );
  updateCountdown(dates.next, nextDate, false);
  for (let i = 0; i < dates.current.values.length; i++) {
    if (dates.current.values[i] - dates.next.values[i] !== 0) {
      dates.general.elements[i].classList.remove("flip");
    }
    setTimeout(function () {
      dates.general.elements[i].classList.add("flip");
    }, 50);
  }
}

function updateCountdown(dates, currentTime, isCurrent) {
  const totalSeconds = (newYearTime - currentTime) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (currentTime.getMonth() == 0 && currentTime.getDate() <= 2) {
    dates.values = ["00", "00", "00", "00"];
    for (let i = 0; i < dates.elements.length; i++) {
      for (let j = 0; j < daysElCurr.length; j++) {
        dates.elements[i][j].innerHTML = dates.values[i];
        if (isCurrent) {
          newYearEl.innerHTML = newYear - 1;
        }
      }
    }

    return;
  }

  dates.values = [
    days,
    formatTime(hours),
    formatTime(mins),
    formatTime(seconds)
  ];

  for (let i = 0; i < dates.elements.length; i++) {
    for (let j = 0; j < daysElCurr.length; j++) {
      dates.elements[i][j].innerHTML = dates.values[i];
    }
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateAllCountdowns();
setInterval(updateAllCountdowns, 1000);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '1.5rem',
    duration: 2000,
    delay: 200,
    // reset: true
});


// sr.reveal(`.rahul`,{ delay: 300, origin: 'top' })
sr.reveal(`.rahul`, { origin: 'left', delay: 700 })
sr.reveal(`.pranjal`, { origin: 'right', delay: 700 })
sr.reveal(`.gif,.home_txt`, { delay: 1300, origin: 'top' })
sr.reveal(`.top-right-decoration,.top-left-decoration`, { origin: 'left', delay: 2200 })
sr.reveal(`.responsive-table__row`, { interval: 200 })
sr.reveal(`.table_container`, { delay: 100, origin: 'top' })
sr.reveal(`.happiness,.hindi_text`, { delay: 400, origin: 'bottom' })
sr.reveal(`.social__links`, { delay: 1000, origin: 'bottom', interval: 200 })
sr.reveal(`.newsletter__description,.home__bottom`, { origin: 'left', delay: 400 })
sr.reveal(`.newsletter__form,.CTA`, { origin: 'right', delay: 400 })









// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: Dec 04, 2023!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Rahul Jangir', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
