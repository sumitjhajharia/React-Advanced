class App extends React.Component {
  render() { 
    return(
      <div>
      <OnClickWithCounter /> 
      <OnHoverkWithCounter />
      </div>)
  }
}
 
const HOC = (OriginalComponent) => {
 class NewComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      counter : 0
    }
  }
  incCounter = () => {
    this.setState((state) => ({
      counter : state.counter + 1
    }))
  }
 
   render() {
     return (    
        <OriginalComponent incCounter = {this.incCounter}
        counter = {this.state.counter}/>
      )}
 }
 return NewComponent;
}
 
class OnClick extends React.Component {
  render() {
    return(
      <button onClick={ this.props.incCounter}> Clicked { this.props.counter} times !!!</button>
    )
  }
}
 
 
class OnHover extends React.Component {
  render() {
    return(
      <div onMouseOver={ this.props.incCounter}> Clicked { this.props.counter} times !!!</div>
    )
  }
}
 
const OnClickWithCounter = HOC(OnClick);
const OnHoverkWithCounter = HOC(OnHover);
 
ReactDOM.render(<App />, document.getElementById('root'));
