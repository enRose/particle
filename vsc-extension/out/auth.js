"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const signUp = (context) => {
    let userEmail = context.workspaceState.get('user-email');
    if (!userEmail) {
        vscode.window
            .showInputBox({ prompt: 'Enter your email' })
            .then(email => {
            userEmail = email;
            return vscode.window.showInputBox({ prompt: 'Enter your password' });
        })
            .then(password => {
            graphql.graphqlSignUp(userEmail, password, (data) => {
                context.workspaceState.update('token', data.signUp.token);
                context.workspaceState.update('user-email', userEmail);
                vscode.window.showInformationMessage("You're logged in.");
            });
        });
    }
};
//# sourceMappingURL=auth.js.map