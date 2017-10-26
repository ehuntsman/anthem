var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("datetime").innerHTML = days[d.getDay()] + ", " + monthNames[d.getMonth()] + " " + d.getDate();


/**
 * @title: Random Quote Generator
 * @objective: Get a random quote whenever button is clicked
 */

var quoteArray = [
    {
        content: "Tikki, spots on!"
    },
    {
        content: "Lucky Charm!"
    },
    {
        content: "Bye-bye, little butterfly"
    },
    {
        content: "Pound it!"
    },
    {
        content: "Oh how romantic. Tomcat&apos;s come to save his lovebug."
    },
    {
        content: "Don&apos;t worry, I&apos;m not a stranger to disasters."
    },
    {
        content: "Plagg, claws out!"
    },
    {
        content: "Fewer puns, more action!"
    },
    {
        content: "All that is necessary for the triumph of evil is that good people do nothing."
    },
    {
        content: "That&apos;s the problem with superheroes. They&apos;re too... heroic!"
    },
    {
        content: "Chat Noir! You&apos;re good at annoying people! Do your thing!"
    },
    {
        content: "Sometimes, your heart tells you one thing, but a great superhero always listens to her head."
    },
    {
        content: "Listen, I'm feline more generous than usual today. So cool down and we'll call it quits, okay?"
    }
];

//Generate a Random Quote
window.onload = randomQuote;

//random quote function
function randomQuote (){
    //get a random number to pick a random quote object
    random = Math.floor(Math.random() * quoteArray.length);
    //get that random quote's content
    quote.innerHTML = quoteArray[random].content;
}

var deadline = '2017-06-01';
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockdiv', deadline);
