"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const process = require("process");
const graphql = require("./graphql");
const auth_1 = require("./auth");
function activate(context) {
    console.log('particle is activated.');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.particle', () => {
        // The code placed here will be executed every time your command is executed
        const editor = vscode.window.activeTextEditor;
        const selectedCode = editor.document.getText(editor.selection);
        let snippetObject = {};
        vscode.languages.getLanguages()
            .then(listOfLanguages => {
            var _a;
            return vscode.window.showQuickPick(listOfLanguages, { placeHolder: (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.languageId
            });
        })
            .then(selectedLanguage => {
            snippetObject.lang = selectedLanguage;
            return vscode.window.showInputBox({ prompt: "Enter snippet name" });
        })
            .then(snippetName => {
            snippetObject.name = snippetName;
            return vscode.window.showInputBox({ prompt: "Enter snippet prefix" });
        })
            .then(snippetPrefix => {
            snippetObject.prefix = snippetPrefix;
            return vscode.window.showInputBox({ prompt: "Enter snippet description" });
        })
            .then(snippetDesc => {
            snippetObject.description = snippetDesc;
        })
            .then(() => {
            const token = context.workspaceState.get('token');
            if (token) {
                graphql.me(token)
                    .then(data => {
                    //context.workspaceState.update('token', data.me.token)
                })
                    .catch(error => {
                    auth_1.sisu(context);
                });
            }
            else {
                auth_1.sisu(context);
            }
        });
        process.env.HOME;
        vscode.window.showInformationMessage('Welcom to particle!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map