const pool = require("../../config/database");

module.exports = {
  // files
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO files (file_name, extension, url, id_category) 
      VALUES(?,?,?,?)`,
      [data.file_name, data.extension, data.url, data.id_category],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getFiles: (callBack) => {
    pool.query(
      `SELECT id,file_name, extension, url, id_category FROM files`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  // end files
  // files-category
  createFilesCategory: (data, callBack) => {
    pool.query(
      `INSERT INTO files_category (category_name, descripcion) 
                      VALUES(?,?)`,
      [data.category_name, data.descripcion],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getFilesCategory: (callBack) => {
    pool.query(
      `SELECT id,category_name, descripcion FROM files_category ORDER BY category_name ASC`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
