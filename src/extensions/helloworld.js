/*
 * @file: 
 * @Author: 
 * @Date: 2022-05-16 13:09:05
 * @LastEditTime: 2022-05-16 13:17:49
 */
const vscode = require('vscode');
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello',()=>{
        vscode.window.showInformationMessage('执行了hello world')
    }))
}

