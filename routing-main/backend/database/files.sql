USE `registro`;
-- crear tabla categorias
CREATE TABLE IF NOT EXISTS `files_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
  `category_name` varchar(200) NOT NULL COMMENT 'nombre de la categoria del archivo',
  `descripcion` varchar(400) DEFAULT NULL COMMENT 'descripcion opcional',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1 COMMENT = 'tabla de category files';
-- crear tabla files
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
  `file_name` varchar(200) NOT NULL COMMENT 'nombre archivo',
  `extension` varchar(10) DEFAULT NULL COMMENT 'extension del archivo',
  `url` varchar(200) DEFAULT NULL COMMENT 'url del archivo',
  `id_category` int(11) NOT NULL COMMENT 'id de la categoria',
  PRIMARY KEY (`id`),
  INDEX (`id_category`),
  FOREIGN KEY (`id_category`) REFERENCES `files_category`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1 COMMENT = 'tabla de files';
-- insertar categorias
INSERT INTO
  `files_category` (`category_name`, `descripcion`)
VALUES
  (
    'FORMATOS',
    'FORMATOS DISEÑADOS PARA LOS PROCESOS'
  ),
  (
    'ARCHIVOS DE CONTROL',
    'ARCHIVOS PARA CONTROLAR LOS PROCESOS'
  );