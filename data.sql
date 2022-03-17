CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE clientes (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre varchar(30) NOT NULL,
    descripcion varchar(30) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO clientes (nombre, descripcion, date) VALUES ('Fabiola', 'Primer Desafio', '2022-03-17');