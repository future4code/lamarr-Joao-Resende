### Exercício 1

a) A query irá remover a coluna 'salary' da tabela.

b) A query irá mudar o nome da coluna 'gender' para 'sex'.

c) A query irá mudar o tipo da coluna 'gender' para VARCHAR(225).

d) A query é:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a) A query é:

```
UPDATE Actor
SET name = "Cássia Kiss", birth_date = "1958-01-06"
WHERE id = "003";
```

b) As queries são:

```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```

c) A query é:

```
UPDATE Actor
SET
name = "Deborah Secco",
salary = 650000,
birth_date = "1979-11-26",
gender = "female"
WHERE id = "005";
```

### Exercício 3

a) A query é:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) A query é:

```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a) A query é:

```
SELECT MAX(salary)
FROM Actor;
```

b) A query é:

```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c) A query é:

```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d) A query é:

```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5

a) A query conta quantos atores têm para cada gênero (masculino e feminino).

b) A query é:

```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c) A query é:

```
SELECT *
FROM Actor
ORDER BY salary;
```

d) A query é:

```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) A query é:

```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a) A query é:

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) A query é:

```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) A query é:

```
UPDATE Movie
SET playing_limit_date = "2021-10-25"
WHERE id = "001";
```
```
UPDATE Movie
SET playing_limit_date = "2023-02-20"
WHERE id = "002";
```

d) A query é:

```
DELETE FROM Movie 
WHERE id = "001";
```

A resposta é: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0". 
Como a coluna foi deletada, a atualização da sinopse não afetou nenhuma coluna existente.

### EXERCICIO 7

a) A query é:

```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

b) A query é:

```
SELECT AVG(rating)
FROM Movie;
```

c) A query é:

```
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE();
```

d) A query é:

```
SELECT COUNT(*)
FROM Movie
WHERE release_date > CURDATE();
```

e) A query é:

```
SELECT MAX(rating)
FROM Movie;
```

f) A query é:

```
SELECT MIN(rating)
FROM Movie;
```

### EXERCICIO 8

a) A query é:

```
SELECT *
FROM Movie
ORDER BY name;
```

b) A query é:

```
SELECT *
FROM Movie
ORDER BY name DESC
LIMIT 5;
```

c) A query é:

```
SELECT *
FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

d) A query é:

```
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```