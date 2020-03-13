import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('particle is activated.');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.particle', () => {
		// The code placed here will be executed every time your command is executed

		vscode.languages.getLanguages()
            .then((listOfLanguages) => {
                return vscode.window.showQuickPick(
                    listOfLanguages, 
                    { placeHolder: vscode.window.activeTextEditor?.document.languageId });
            });

		// Display a message box to the user
		const today = new Date();

		const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

		vscode.window.showInformationMessage('Hello particle!' + time);		
		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
