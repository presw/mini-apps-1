
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // stuff here
    }
  }

  componentDidMount() {
    // do something
  }

  render() {
    return (
      <h1>Hello world</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
