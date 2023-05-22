# URL
https://www.snowfield.cf

# Stack
**FE&BE**
><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
><img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
><img src="https://img.shields.io/badge/nodedotjs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
**DB**
><img src="https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white">

---

# Initial Processing
1. Install Visual Studio Code, Node.js
2. In VSC terminal > npm init. ❗entry point: server.js 로 설정해주셔야 합니다.❗
3. npm install express, cors, body-parser, sqlite3.
![image](https://github.com/asnowfield/FEBE/assets/86102527/570629a3-dfde-48a3-ae96-29fdf0fc2ac1)
4. To Start, Enter the node server.js ❗entry point에서 설정한 js 파일 명을 입력해 주셔야 합니다.❗

---
# Interesting
1. Android can show a meta by snowfield.cf but apple won't.
2. N datatables vs one datatable that has one more column. using what and why?
3. Visual studio code extension sqlite 3 won't provide a function that delete table. so is pretty problem, to manage table. but it was easy to use.

# Big part.
1. MEMber, delete score? 
2. if user is a member, than score maintiained in forever perhaps delete score. anonymous score get delete in 24hours.
3. pop cat처럼 귀여운거로 하기? It'll take some time.
5. Sort a country by IP address.

# Done 
**index.html**
1. Alert a Tip to user that keyboard user can use a keyboard to play by press the number button.
2. By pressing a button toss a parameters, that mode, difficulty. so server can provide a appropriate info to user.
3. Make two options that 3life, 10sec.

**selection.html**
1. Checking a radio option than show a gif, to interactive web.
2. Set a css to adjusting a window size.
3. Show every table data in that rank board.
4. Also button.

**quiz.html**
1. Keyboard function
2. Score function
3. Mode Function
4. Using locastorage to result.html read a score. Can be improved in json params. i see there was three option [json params, url prams, localstorage] but i choose a localstorage. but now local storage is weak for security. bz user can edit a value in any time. for now is best json parmas.
5. Control css color by ternary operator.
6. Show a number for keyboard user.
7. Setting adjusting window size, that mean for mobile, tablet, laptop, desktop user.

**result.html**
1. Read data that wroten previous html.
2. Submit a username but it can be null so user score can be registered anonymously.
3. Also againn, home button.

**rank.html**
1. show evert data in that difficulty, mode rankboard.
2. rank frame can be extended by data number. if there is 1,000 data than frame will stratched just for that.
