/* eslint-disable @typescript-eslint/semi */
import * as vscode from 'vscode'
import * as process from 'process'
import * as http from 'http'
import * as graphql from './graphql'

export function activate(context: vscode.ExtensionContext) {

	console.log('particle is activated.')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.particle', () => {
		// The code placed here will be executed every time your command is executed

		const editor: any = vscode.window.activeTextEditor

		const selectedCode = editor.document.getText(editor.selection)

		let snippetObject: any = {}

		vscode.languages.getLanguages()
			.then(listOfLanguages => {
				return vscode.window.showQuickPick(
					listOfLanguages,
					{ placeHolder: 
						vscode.window.activeTextEditor?.document.languageId 
					})
			})
			.then(selectedLanguage => {
				snippetObject.lang = selectedLanguage
				return vscode.window.showInputBox({ prompt: "Enter snippet name" })
			})
			.then(snippetName => {
				snippetObject.name = snippetName
				return vscode.window.showInputBox({ prompt: "Enter snippet prefix" })
			})
			.then(snippetPrefix => {
				snippetObject.prefix = snippetPrefix
				return vscode.window.showInputBox({ prompt: "Enter snippet description" })
			})
			.then(snippetDesc => {
				snippetObject.description = snippetDesc
			})
			.then(() => {
				let userEmail = context.workspaceState.get('user-email')
				
				if (!userEmail) {
					vscode.window
						.showInputBox({ prompt: 'Enter your email' })
						.then(email => {
							userEmail = email
							return vscode.window.showInputBox({prompt: 'Enter your password'})
						})
						.then(password => {
							graphql.signUp(userEmail, password, (token: any) => {
								context.workspaceState.update('token', token)
								
								context.workspaceState.update('user-email', userEmail)

								vscode.window.showInformationMessage("You're logged in.")
							})
						})
				}

			})

		process.env.HOME

		vscode.window.showInformationMessage('Hello particle!')
	})

	context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() { }