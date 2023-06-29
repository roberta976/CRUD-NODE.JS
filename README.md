# CRUD-Node.js
 
Template for the registration and listing screen, using the beloved Markojs template.
 
 "author": "Roberta"
 "license": "ISC"
 
 "dependencies": {
 "body-parser": "^1.19.0",
 "connect-flash": "^0.1.1",
 "express": "^4.17.1",
  "express-session": "^1.17.1",
  "marko": "^4.23.12",
  "mysql2": "^2.2.5",
  "nodemon": "^2.0.7"
  }
  

To start the template, start a new terminal window and type

```bash
  npm start 
```

and type in your browser: localhost: 3000

_STUDENT LIST PAGE_

On this page, the user has a screen of registered students,
together with their respective data. it is possible to edit the registration of each student, delete it and even add a new student to the list.

![image](https://user-images.githubusercontent.com/66263681/117326684-49a03500-ae68-11eb-87c9-e5d6c88c462f.png)

_REGISTER PAGE_

The process of editing and adding a new student runs on this registration screen and when a new student is saved or updated, it automatically returns to the list screen

![Captura de Tela (10)](https://user-images.githubusercontent.com/66263681/117316096-aa2a7480-ae5e-11eb-846b-c315f957f6a0.png)


The application becomes very dynamic with error and success messages (toasts)

![image](https://user-images.githubusercontent.com/66263681/117328236-d0a1dd00-ae69-11eb-81c2-1b6b715984ec.png)

Inserting each student's data into a MySQL database, using the workbench to create the tables and establishing a host connection. Thus, the registered data are stored in the database and are returned in the list screen.

![image](https://user-images.githubusercontent.com/66263681/117328372-f4fdb980-ae69-11eb-92ad-fa159ce1bb12.png)

