import React from 'react'
let Block =  require('react-code-blocks')

export const Blob = (props:any) => {
  const code = `class HelloMessage extends React.Component {
    handlePress = () => {
      alert('Hello')
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>Say Hello</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    mountNode
  );`
  
  return (
    <Block.CodeBlock
     text={code}
     language={'typescript'}
     showLineNumbers={true}
     wrapLines
   />
  )
} 