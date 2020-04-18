import * as graphql from './graphql'
import * as vscode from 'vscode'

export const sisu = (context: vscode.ExtensionContext) => {
  let userEmail:any = undefined
	
	vscode.window
		.showInputBox({ prompt: 'Enter your email' })
		.then(email => {
			userEmail = email
			return vscode.window.showInputBox({prompt: 'Enter your password'})
		})
		.then(password => {
			graphql.graphqlSignIn(userEmail, password)
			.then((data: any) => {
				context.workspaceState.update('token', data.signIn.token)
				
				vscode.window.showInformationMessage("You're logged in.")
			})
			.catch(error => {
				console.log(error)

				graphql.graphqlSignUp(userEmail, password)
				.then(data => {
					context.workspaceState.update('token', data.signUp.token)
					
					vscode.window.showInformationMessage("You've just signed up.")
				})
				.catch(error => {
					console.log(error)
					vscode.window.showInformationMessage("sign up error.")
				})
			})			
		})
}