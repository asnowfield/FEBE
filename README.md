# Dev Enviroment
1. IDE: VSC
2. sqlite3
3. HTML, CSS, Vanilla JS, XMLhttpRequest.
4. Node : (express, cors, body-parser, sqlite3)

# Sequnce 
1. index.html
2. quiz.html
3. result.html
    - DB에 저장. (SQLite3)
4. rank.html
    - DB 읽어 오기.


```
CREATE TABLE quizDB (
  score INTEGER,
  userName TEXT
)
```

# Initial Processing
1. Install Visual Studio Code, Node.js
2. npm init. ❗entry point: server.js 로 설정해주셔야 합니다.❗
3. npm install express, cors, body-parser, sqlite3.
![image](https://github.com/asnowfield/FEBE/assets/86102527/570629a3-dfde-48a3-ae96-29fdf0fc2ac1)
4. To Start Enter the node server.js ❗entry point에서 설정한 js 파일 명을 입력해 주셔야 합니다.❗


# TODO
1. 난이도 조절 값 설정.
2. Index.html에서 rank.html로 이동 버튼.
3. rank.html 에서 index.html로 이동 버튼.
4. UI, UX 조정.
5. add meta.
6. upgrade head.
7. 10second speed run.
8. 3-life game.
9. start.html.
10. score index to button.

# Done 
1. Index.html에서 난이도별 rank.html 이동 버튼.
2. N datatables vs one datatable that has one more column. chose N tables.
3. 
