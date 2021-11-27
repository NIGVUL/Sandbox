server - localhost:8080
react-app - localhost:3000
phpmyadmin - localhost:8081

Запуск через docker
Перейти в директорию sandbox
Запустить команду docker-compose up -d

Будет скачан в docker:
node version 16
php version apache-7.4
phpmyadmin version 5.1.1
mariadb version 10.7
Подтянется node_modules для react

Для PhpMyAdmin
сервер - mariadb
Пользователь - root
Пароль - root
База - sandbox
Таблица - category


Запросы по localhost:8080/tree.php

GET 
localhost:8080/tree.php
Можно просмотреть конкретную ветку указав id
localhost:8080/tree.php?id=35

Основной католог - parentId=0
POST
localhost:8080/tree.php?id=35&parentId=0&title=Игры
localhost:8080/tree.php?id=35&parentId=0
localhost:8080/tree.php?id=35&title=Игры

DELETE
localhost:8080/tree.php?id=35 
Удаляется вся ветка

PUT - Добавление 
localhost:8080/tree.php?parentId=0&title=Игры
