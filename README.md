drop table animais;

drop table proprietarios;

CREATE TABLE proprietarios (
proprietario_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
telefone VARCHAR NOT NULL
)

CREATE TABLE animais (
animal_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
tipo VARCHAR NOT NULL,
proprietario_id INT NOT NULL,
CONSTRAINT fk_proprietarios FOREIGN KEY (proprietario_id) REFERENCES proprietarios (proprietario_id)
)
