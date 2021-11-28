server - localhost:8080
react-app - localhost:3000
phpmyadmin - localhost:8081

Запуск через docker
1. Перейти в директорию sandbox
2. Запустить команду docker-compose up -d

Будет скачано в docker:
1. node version 16
2. php version apache-7.4
3. phpmyadmin version 5.1.1
4. mariadb version 10.7

Для PhpMyAdmin
1. сервер - mariadb
2. Пользователь - root
3. Пароль - root
4. База - sandbox
5. Таблица - category


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
