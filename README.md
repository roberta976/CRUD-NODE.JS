
 CRUD-NODE.JS
 
 Template da tela de cadastro e listagem, com uso do queridinho template Markojs.
 
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
  
  Para iniciar o template, inicie uma nova janela no terminal e digite *npm start* e digite no seu browser: localhost: 3000

_PÁGINA DE LISTAGEM DE ALUNOS_ 

Nesta página, o usuário dispõe de uma tela de alunos cadastrados, 
juntamente com seus respectivos dados. é possível editar o cadastro de cada aluno, deletá-lo e até mesmo adicionar um novo aluno à listagem. 

![image](https://user-images.githubusercontent.com/66263681/117326684-49a03500-ae68-11eb-87c9-e5d6c88c462f.png)

_PÁGINA DE CADASTRO_

O processo de editar e adicionar um novo aluno, roda nessa telinha de cadastro e quandoum novo aluno é salvo ou atualizado, ela retorna automaticamente para a tela de listagem

![Captura de Tela (10)](https://user-images.githubusercontent.com/66263681/117316096-aa2a7480-ae5e-11eb-846b-c315f957f6a0.png)


A aplicação se torna bastante dinâmica com mensagens(toasts) de erro, e de sucesso

![image](https://user-images.githubusercontent.com/66263681/117328236-d0a1dd00-ae69-11eb-81c2-1b6b715984ec.png)

Com inserção dos dados de cada aluno em um banco de dados MySQL, usando o workbench para criar as tabelas e estabelecer uma conexão de host. Assim, os dados cadastrados são armazenados no banco de dados e são retornados na telinha de listagem.

![image](https://user-images.githubusercontent.com/66263681/117328372-f4fdb980-ae69-11eb-92ad-fa159ce1bb12.png)

