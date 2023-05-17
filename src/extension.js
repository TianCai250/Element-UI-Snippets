/*
 * @file:
 * @Author:
 * @Date: 2022-05-16 13:05:19
 * @LastEditTime: 2022-05-16 15:24:53
 */
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
  console.log("扩展启动");
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function () {
  console.log("扩展停止");
};
