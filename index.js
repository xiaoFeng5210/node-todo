// 根目录
const homedir = require("os").homedir();
const home = process.env.HOME || homedir;
const p = require("path");
const dbPath = p.join(home, ".todo");
const fs = require("fs");
const db = require("./db.js");

module.exports.add = async title => {
  // 读取之前的任务 await 能拿到promise成功后的结果
  const list = await db.read();
  // 往里面添加个title任务
  list.push({ title, done: false });
  // 存储任务到文件
  await db.write(list);
};

module.exports.clear = async () => {
  await db.write([]);
};
