import * as vscode from 'vscode'
import * as process from 'process'
import * as fs from 'fs'
import * as util from 'util'
import * as os from 'os'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('particle is activated.')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.particle', () => {
		// The code placed here will be executed every time your command is executed

		const editor:any = vscode.window.activeTextEditor
		
        const selectedCode = editor.document.getText(editor.selection)
		
		let snippetObject = {}
		
		vscode.languages.getLanguages()
            .then((listOfLanguages) => 
                vscode.window.showQuickPick(
                	listOfLanguages, 
					{ placeHolder: vscode.window.activeTextEditor?.document.languageId }
				)
			)
			.then(selectedLanguage => {
                snippetObject.lang = selectedLanguage;
                return vscode.window.showInputBox({ prompt: "Enter snippet name" });
            })

	
			process.env.HOME 

		vscode.window.showInformationMessage('Hello particle!')	
		
	})

	context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
