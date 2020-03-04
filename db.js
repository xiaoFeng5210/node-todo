const homedir = require("os").homedir();
const home = process.env.HOME || homedir;
const p = require("path");
const dbPath = p.join(home, ".todo");
const fs = require("fs");

const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { flag: "a+" }, (err, data) => {
        if (err) {
          return reject(err);
        }
        let list;
        try {
          list = JSON.parse(data.toString());
        } catch (error) {
          list = [];
        }
        resolve(list);
      });
    });
  },

  write(list, path = dbPath) {
    return new Promise((resolve, reject) => {
      const strList = JSON.stringify(list);
      fs.writeFile(path, strList, err => {
        if (err) {
          return reject(err);
        }
        console.log("写入成功");
        resolve();
      });
    });
  }
};

module.exports = db;
