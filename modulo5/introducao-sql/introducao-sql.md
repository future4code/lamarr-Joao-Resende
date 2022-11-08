### Exercício 1

a) 

- VARCHAR(N) => String com no máximo N caracteres;
- DATE => Representa data (YYYY-MM-DD);
- PRIMARY KEY => Chave primária (chave única na tabela);
- NOT NULL => Indica que a coluna não pode ser nula.

b) 

- SHOW DATABASES => Mostra informações do Schema.
- SHOW TABLES => Mostra as tabelas já criadas.

c) Mostra a tabela de atores completa criada anteriormente.

### Exercício 2

a)  A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

O erro ocorreu porque já havia uma coluna com o ID '002', que é uma chave primária (deve ser único).

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

O erro ocorreu porque a estão faltando o 'birth_date' e o 'gender' na chamada da tabela.

Query correta:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Código de erro: 1364. O campo 'name' não tem um valor padrão

O erro ocorreu porque a coluna 'name' não tem um valor padrão e não pode ser NULL. Devemos passar um valor para a coluna 'name'.

Query correta:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

O erro ocorreu porque está faltando "" na data.

Query correta:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) As Querys são:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Cauã Reymond",
  700000,
  "1980-05-20", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Paolla Oliveira",
  1000000,
  "1982-04-14", 
  "female"
);
```

### Exercício 3

a) A query é:

```
SELECT * FROM Actor WHERE gender = "female"
```

b) A query é:

```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) A query é:

```
SELECT * from Actor WHERE gender = "invalid";
```
Essa query irá retornar a tabela com todos os dados como NULL, pois nenhum ator tem gender "invalid".

d) A query é:

```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

O erro ocorrou porque foi passado 'nome' ao invés de 'name' para a coluna.

Query correta:

```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

a) A query busca todas as informações dos atores em que o nome começa com a letra A ou J e têm salário maior que 300.000.

b) A query é:

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) A query é:

```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";
```

d) A query é:

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR "%a%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) A query é:

```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

A query cria uma tabela com um id (chave primária), um nome (único), a sinopse (texto), data de lançamento (data no formato YYYY-MM-DD) e a avaliação (número inteiro).

b) A query é:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

c) A query é:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

d) A query é:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e) A query é:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

### Exercício 6

a) A query é:

```
SELECT id, name, rating from Movie WHERE id = "001";
```

b) A query é:

```
SELECT * from Movie WHERE name = "Se Eu Fosse Você";
```

c) A query é:

```
SELECT id, name, synopsis from Movie WHERE rating >= 7;
```

### Exercício 7

a) A query é:

```
SELECT * from Movie WHERE name LIKE "%vida%";
```

b) A query é:

```
SELECT * FROM Movie WHERE name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```

c) A query é:

```
SELECT * FROM Movie WHERE release_date < CURDATE();
```

d) A query é:

```
SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
(name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND
rating > 7;
```
