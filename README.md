# register-user
### Uma API de cadastro de usuário
A API tem dois arquivos principais:

* #### [bancoDeDados.js](https://github.com/ArthurTerozendi/register-user/blob/main/server/bancoDeDados.js)
 
Ela é responsável pela lógica de programação que salvará os registros, nesse caso como é uma API básica inicial e não tem conexão com o banco de dados ela salvára em uma variável local.
 
Dentro dele temos 5 métodos:
  1. add() - adiciona um usuário a lista (nossa variável local);
  2. get(id) - recebe um valor por paramêtro e verifica se existe um *ID* com esse valor, se existir ele retorna o usuário com aquele valor de *ID*, se não, retorna um texto falando que o usuário não foi encontrádo;
  3. getAll() - retorna a lista com todos os usuários cadastrados;
  4. update(id, user) - recebe dois parâmetros, um *ID* e um *objeto* com os valores que serão alterados. Para fazer a alteração, primeiro é procurado o usuário com aquela *ID*. Se achado é feito a troca dos valores que estavam salvos pelos novos valores. Se não, retorna um texto falando que o usuário não foi encontrádo;
  5. remove(id) - recebe um *ID* como parâmetro. Se existir um usuário com essa *ID* ele é deletado. Se não, retorna um texto falando que o usuário não foi encontrádo;

* #### [server.js](https://github.com/ArthurTerozendi/register-user/blob/main/server/server.js)

É a ponte entre o nosso bandoDeDados.js e o programa que irá mandar as requisições (Postman, Insominia, etc...). 

Para isso, ele escolhe uma porta (Nesse caso a 3003) e fica "escutando" as chamadas para essa porta. 
