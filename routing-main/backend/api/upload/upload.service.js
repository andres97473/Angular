const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into files (file_name, extension, url, categoria) 
                    values(?,?,?,?)`,
      [data.file_name, data.extension, data.url, data.categoria],
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
      `select id,file_name, extension, url, categoria from files`,
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
