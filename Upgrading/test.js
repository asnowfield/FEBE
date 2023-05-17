        //check dificult by URL
        var currentURL = window.location.href;
        var dificult;
        var MODENUM;
        var common = document.getElementsByClassName("common");
        var r, g, b, rgb;

        //Generate a unique selection.
        var uniqueClassNum = Math.floor(Math.random() * common.length);
        common[uniqueClassNum].classList.add("unique");
        var unique = document.getElementsByClassName("unique");

        if (currentURL.includes("easy")) {
          dificult = "ez";
          MODENUM = 127;
        } else if (currentURL.includes("normal")) {
          dificult = "nm";
          MODENUM = 63;
        } else {
          dificult = "hd";
          MODENUM = 31;
        }

        //Generate a rgb to apply in css.
        color = (r, g, b) => {
          r = Math.floor(Math.random() * 256); // generates a random value for red (0-255)
          g = Math.floor(Math.random() * 256); // generates a random value for green (0-255)
          b = Math.floor(Math.random() * 256); // generates a random value for blue (0-255)
          return "rgb(" + r + "," + g + "," + b + ")";
        };

        generateUnique = (red, gre, blu, MODENUM) => {
          console.log(red + MODENUM);
          console(MODENUM);
          return (
            "rgb(" +
            ((red + MODENUM) % 256) +
            "," +
            ((gre + MODENUM) % 256) +
            "," +
            ((blu + MODENUM) % 256) +
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
          const uniRGB = generateUnique(r, g, b, MODENUM);
        } else if (dificult == "nm") {
          const uniRGB = generateUnique(r, g, b, MODENUM);
        } else {
          const uniRGB = generateUnique(r, g, b, MODENUM);
        }
        unique[0].style.backgroundColor = uniRGB;

        //Plus a score by checking the mode. also active action.
        select = (current, r, g, b, rgb) => {
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
            unique[0].style.backgroundColor = generateUnique(r, g, b, MODENUM);
          } else if (dificult == "nm") {
            unique[0].style.backgroundColor = generateUnique(r, g, b, MODENUM);
          } else {
            unique[0].style.backgroundColor = generateUnique(r, g, b, MODENUM);
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