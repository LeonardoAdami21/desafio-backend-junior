
-- CREATE TABLE Estado (
--     id_estado INT PRIMARY KEY AUTO_INCREMENT,
--     sigla VARCHAR(2) NOT NULL,
--     nome VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE Tipo_Telefone (
--     id_tipo_telefone INT PRIMARY KEY AUTO_INCREMENT,
--     descricao VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE Cliente (
--     id_cliente INT PRIMARY KEY AUTO_INCREMENT,
--     razao_social VARCHAR(100) NOT NULL,
--     id_estado INT,
--     FOREIGN KEY (id_estado) REFERENCES Estado(id_estado)
-- );

-- CREATE TABLE Telefone (
--     id_telefone INT PRIMARY KEY AUTO_INCREMENT,
--     numero VARCHAR(20) NOT NULL,
--     id_cliente INT,
--     id_tipo_telefone INT,
--     FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
--     FOREIGN KEY (id_tipo_telefone) REFERENCES Tipo_Telefone(id_tipo_telefone)
-- );


-- INSERT INTO Tipo_Telefone (descricao) VALUES
-- ('Comercial'),
-- ('Residencial'),
-- ('Celular');

-- INSERT INTO Estado (sigla, nome) VALUES
-- ('SP', 'São Paulo'),
-- ('RJ', 'Rio de Janeiro'),
-- ('MG', 'Minas Gerais');

-- INSERT INTO Cliente (razao_social, id_estado) VALUES
-- ('Empresa ABC', 1),  -- Cliente em São Paulo
-- ('Empresa XYZ', 2),  -- Cliente no Rio de Janeiro
-- ('Loja Beta', 1),    -- Cliente em São Paulo
-- ('Consultoria Delta', 3); -- Cli

-- INSERT INTO Telefone (numero, id_cliente, id_tipo_telefone) VALUES
-- ('11-1234-5678', 1, 1),  -- Telefone Comercial da Empresa ABC
-- ('11-9876-5432', 1, 3),  -- Telefone Celular da Empresa ABC
-- ('21-2233-4455', 2, 1),  -- Telefone Comercial da Empresa XYZ
-- ('11-3344-5566', 3, 2),  -- Telefone Residencial da Loja Beta
-- ('31-5566-7788', 4, 3);  -- Telefone Celular da Consultoria Delta

SELECT 
    c.id_cliente,
    c.razao_social,
    t.numero
FROM 
    Cliente c
JOIN 
    Telefone t ON c.id_cliente = t.id_cliente
JOIN 
    Estado e ON c.id_estado = e.id_estado
WHERE 
    e.sigla = 'SP';
