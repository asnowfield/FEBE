# Dev Enviroment
1. IDE: VSC
2. mysql
3. HTML, CSS (BootStrap?), Vanilla JS, Node.

# Sequnce 
1. index.html
2. quiz.html
3. result.html
    - DB에 저장.
4. rank.html
    - DB 읽어 오기.
```
create table score
(
id             bigint auto_increment primary key,
score          int          not null,
user_name      varchar(255) null,
);

```










## mysql DataBase 계정 생성 및 권한 부여 
```
create database [db_name];
create user [db_username] identified by [passWord];
grant all privileges on [db_name].* to [db_username];
```
