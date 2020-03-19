/* eslint-disable @typescript-eslint/semi */
import * as vscode from 'vscode'
import * as process from 'process'
import * as http from 'http'

export function activate(context: vscode.ExtensionContext) {

	console.log('particle is activated.')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.particle', () => {
		// The code placed here will be executed every time your command is executed

		const editor:any = vscode.window.activeTextEditor
		
        const selectedCode = editor.document.getText(editor.selection)
		
		let snippetObject:any = {}
		
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
			.then(snippetName => {
				var dice = 3;
				var sides = 6;
				var query = `query RollDice($dice: Int!, $sides: Int) {
					rollDice(numDice: $dice, numSides: $sides)
				}`;

				const data = JSON.stringify({
					query,
    				variables: { dice, sides },
				  })
				  
				  const options = {
					hostname: 'localhost',
					port: 4000,
					path: '/graphql',
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json',
					  'Content-Length': data.length
					}
				  }
				  
				  const req = http.request(options, res => {
					console.log(`statusCode: ${res.statusCode}`)
				  
					res.on('data', d => {
					  process.stdout.write(d)
					})
				  })
				  
				  req.on('error', error => {
					console.error(error)
				  })
				  
				  req.write(data)
				  req.end()
			})
	
			process.env.HOME 

		vscode.window.showInformationMessage('Hello particle!')	
		
	})

	context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
