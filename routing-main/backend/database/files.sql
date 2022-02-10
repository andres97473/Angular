USE `registro`;
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
  `file_name` varchar(200) NOT NULL COMMENT 'nombre archivo',
  `extension` varchar(10) DEFAULT NULL COMMENT 'extension del archivo',
  `url` varchar(200) DEFAULT NULL COMMENT 'url del archivo',
  `categoria` varchar(50) DEFAULT NULL COMMENT 'categoria donde esta el archivo',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1 COMMENT = 'tabla de files';