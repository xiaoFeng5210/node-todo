var program = require("commander");
const api = require("./index.js");
// 有一个选项叫 x
program.option("-x, --xxx", "fuck x");
// 创建子任务
program
  .command("add <taskName>")
  .description("add a task")
  .action(x => {
    api.add(x);
  });
program
  .command("clear <taskName>")
  .description("clear all tasks")
  .action(() => {
    api.clear();
  });

program.parse(process.argv);

// 说明用户只传了两个参数 node.js cli.js
if (process.argv.length === 2) {
  api.showAll();
}
