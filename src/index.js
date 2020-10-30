class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }
  render() {
    return(
      <div>
        <Input ref={this.inputRef}></Input>
        <button onClick={ this.clickHandler}></button>
      </div>
    )
  }
}


const Input = React.forwardRef((props, ref) => {
  return(      
  <input type="text" placeholder="input box" ref={ref}></input>
  )
  }) 

ReactDOM.render(<App />, document.getElementById('root'));