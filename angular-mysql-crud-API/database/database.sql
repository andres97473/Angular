-- Crear tabla games
CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;


-- Agregar campo a la tabla games
ALTER TABLE games ADD updated_at DATETIME;



-- Crear tabla generos
USE ng_games_db;

CREATE TABLE generos(
    id_genero INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180)
);

DESCRIBE generos;


-- Agregar campo a la tabla generos
USE ng_games_db;
ALTER TABLE generos ADD updated_at DATETIME;
DESCRIBE generos;



-- Insertar registros en la tabla generos
USE ng_games_db;


INSERT INTO generos (    
    title,
    description
)
VALUES
    (        
        'Acción',
        'de lucha y peleas. Basados en ejercicios de repetición'
    ),
    (        
        'Arcade',
        'plataformas, laberintos, aventuras. El usuario debe superar pantallas para seguir jugando'
    ),
    (        
        'Deportivo',
        'fútbol, tenis, baloncesto y conducción. Recrean diversos deportes'
    ),
    (        
        'Disparos',
        'Juegos en los que es esencial el habiliadad con el uso de armas'
    );

SELECT * FROM generos;


-- Agregar relacion entre tabla games y generos
-- Agregar el campo id_genero en la tabla games
USE ng_games_db;
ALTER TABLE games ADD id_genero INT(11);
DESCRIBE games;

-- Eliminar campo de tabla
alter table games drop genero_id;




-- Relacionar el genero_id de games con la tabla generos
ALTER TABLE games ADD FOREIGN KEY (id_genero) REFERENCES generos (id_genero);
DESCRIBE games;

