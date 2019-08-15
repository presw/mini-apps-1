
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: FrontPage,
      userData: {
        name: null,
        email: null,
        password: null,
      },
      locData: {
        address1: null,
        address2: null,
        city: null,
        state: null,
        zipCode: null,
      },
      cardData: {
        cardNum: null,
        expires: null,
        cvv: null,
        zipCode: null,
      },
    }
    this.clickCheckout = this.clickCheckout.bind(this);
  }

  componentDidMount() {
    // do something
  }

  clickCheckout() {
    this.setState({ currentView: F1 });
  }

  submitF1() {
    this.setState({ currentView: F2 });
  }

  render() {
    return (
      <div>
      <h1>Nozama - Buy Stuff!</h1>
      {this.state.currentView === FrontPage ? (
        <this.state.currentView checkout={this.clickCheckout} />
      ) :
      this.state.currentView === F1 ? (
        <this.state.currentView />
      ) :
      this.state.currentView === F2 ? (
        <this.state.currentView /> // F2 presumably
      ) :
      this.state.currentView === F3 ? (
        <this.state.currentView /> // F3 presumably
      ) : (
        <this.state.currentView /> // Confirm presumably
      )
      }
    </div>
    )
  }
}

const FrontPage = (props) => {
  return (
    <div>
      <button onClick={props.checkout} >Checkout</button>
    </div>
  )
}

// class F1 extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//     }
//   }
// }
const F1 = (props) => {
  return (
    <div className="input-fields">
      <div>Please Login</div>
      Name: <input type="text"></input><br></br>
      Email: <input type="text"></input><br></br>
      Password: <input type="text"></input><br></br>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
