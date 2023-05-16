//check dificult by URL
var currentURL = window.location.href;
var dificult;
if (currentURL.includes("easy")) {
  dificult = "ez";
} else if (currentURL.includes("normal")) {
  dificult = "nm";
} else {
  dificult = "hd";
}

var common = document.getElementsByClassName("common");

//Setting per mode plus score.
const EZNUM = 127;
const NMNUM = 63;
const HDNUM = 31;

var r, g, b, rgb;

//Generate a unique selection.
var uniqueClassNum = Math.floor(Math.random() * common.length);
common[uniqueClassNum].classList.add("unique");
var unique = document.getElementsByClassName("unique");

//Generate a rgb to apply in css.
color = (r, g, b) => {
  r = Math.floor(Math.random() * 256); // generates a random value for red (0-255)
  g = Math.floor(Math.random() * 256); // generates a random value for green (0-255)
  b = Math.floor(Math.random() * 256); // generates a random value for blue (0-255)
  return "rgb(" + r + "," + g + "," + b + ")";
};

generateUnique = (red, gre, blu, modeValue) => {
  console.log(red + modeValue);
  console(modeValue);
  return (
    "rgb(" +
    ((red + modeValue) % 256) +
    "," +
    ((gre + modeValue) % 256) +
    "," +
    ((blu + modeValue) % 256) +
    ")"
  );
};

//Apply color.
rgb = color(r, g, b);
console.log(rgb + "rgb");
for (var i = 0; i < common.length; i++) {
  common[i].style.backgroundColor = rgb;
}

if (dificult == "ez") {
  const uniRGB = generateUnique(r, g, b, EZNUM);
} else if (dificult == "nm") {
  const uniRGB = generateUnique(r, g, b, NMNUM);
} else {
  const uniRGB = generateUnique(r, g, b, HDNUM);
}
unique[0].style.backgroundColor = uniRGB;

//Plus a score by checking the mode. also active action.
select = (
  current,
  uniqueR,
  uniqueG,
  uniqueB,
  uniqeRGB,
  r,
  g,
  b,
  rgb
) => {
  var score = Number(document.getElementById("score").innerHTML);
  if (current.classList.contains("unique")) {
    if (dificult == "ez") {
      document.getElementById("score").innerHTML = score + 7;
    } else if (dificult == "nm") {
      document.getElementById("score").innerHTML = score + 10;
    } else if (dificult == "hd") {
      document.getElementById("score").innerHTML = score + 15;
    }
  }

  //Changethe unique selection.
  unique[0].classList.remove("unique");
  uniqueClassNum = Math.floor(Math.random() * common.length);
  common[uniqueClassNum].classList.add("unique");

  //Change ther color.
  rgb = color(r, g, b);
  for (var i = 0; i < common.length; i++) {
    common[i].style.backgroundColor = rgb;
  }

  if (dificult == "ez") {
    unique[0].style.backgroundColor = generateUnique(
      uniqueR,
      uniqueG,
      uniqueB,
      r,
      g,
      b,
      EZNUM
    );
  } else if (dificult == "nm") {
    unique[0].style.backgroundColor = generateUnique(
      uniqueR,
      uniqueG,
      uniqueB,
      r,
      g,
      b,
      NMNUM
    );
  } else {
    unique[0].style.backgroundColor = generateUnique(
      uniqueR,
      uniqueG,
      uniqueB,
      r,
      g,
      b,
      HDNUM
    );
  }
};

const timeElement = document.getElementById("time");
let time = 10;
const countdown = setInterval(() => {
  timeElement.innerText = time;
  time--;
  if (time < 0) {
    clearInterval(countdown);
    var score = document.getElementById("score").innerHTML;
    localStorage.setItem("resultScore", score);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/result");
    xhr.send();
    window.location.href = "/result";
  }
}, 1000);