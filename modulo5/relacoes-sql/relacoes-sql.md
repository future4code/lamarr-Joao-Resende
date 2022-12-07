### Exercício 1

a) Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada.

b) A query é:

```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001", 
  "Filme é ótimo!",
  8.5,
  "003"
);
```

c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`jbl-4416851-joao-resende`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`))

Não é possível adicionar uma avaliação de um filme que não existe.

d) A query é:

```
ALTER TABLE Movie DROP COLUMN rating;
```

e) Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`jbl-4416851-joao-resende`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`))

Não é possível deletar um filme que já tenha uma chave estrangeira.

### Exercício 2

a) A tabela relaciona os filmes e atores com os filmes através do id do ator e do id do filme.

b) As querys são:

```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"004",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"004",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"004",
    "003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"003",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"002",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"002",
    "001"
);
```

c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`jbl-4416851-joao-resende`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`))

Como o id do filme não existe na tabela de filmes, gera o erro descrito acima.

d) Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`jbl-4416851-joao-resende`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (` id`))

Como o ator está relacionado com um chave estrangeira, ele não pode ser excluído.

### Exercício 3

a) O operador ON especifica em qual tabela será juntado as colunas onde as chaves estrangeiras são iguais.

b) A query é:

```
SELECT m.name, m.id, r.rate FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```