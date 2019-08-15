
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
        phoneNum: null,
      },
      cardData: {
        cardNum: null,
        expires: null,
        cvv: null,
        billingCode: null,
      },
    }
    this.clickCheckout = this.clickCheckout.bind(this);
    this.submitF1 = this.submitF1.bind(this);
    this.submitF2 = this.submitF2.bind(this);
    this.submitF3 = this.submitF3.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
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

  submitF2() {
    this.setState({ currentView: F3 });
  }

  submitF3() {
    this.setState({ currentView: Confirm });
  }

  returnToMain() {
    this.setState({ currentView: FrontPage });
  }

  render() {
    return (
      <div>
      <h1>Nozama - Buy Stuff!</h1>
      {this.state.currentView === FrontPage ? (
        <this.state.currentView checkout={this.clickCheckout} />
      ) :
      this.state.currentView === F1 ? (
        <this.state.currentView submitF1={this.submitF1} />
      ) :
      this.state.currentView === F2 ? (
        <this.state.currentView submitF2={this.submitF2} />
      ) :
      this.state.currentView === F3 ? (
        <this.state.currentView submitF3={this.submitF3} />
      ) : (
        <this.state.currentView returnToMain={this.returnToMain} props={this.state}/>
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

const F1 = (props) => {
  return (
    <div className="input-fields">
      <div>Please Login</div>
      Name: <input placeholder="Name" type="text"></input><br></br>
      Email: <input placeholder="Email" type="text"></input><br></br>
      Password: <input placeholder="Password" type="text"></input><br></br>
      <button onClick={props.submitF1}>Submit</button>
    </div>
  )
}

const F2 = (props) => {
  return (
    <div className="input-fields">
      <div>Please delivery address</div>
      Address: <input placeholder="Address" type="text"></input><br></br>
      Apt: <input placeholder="Apt" type="text"></input><br></br>
      City: <input placeholder="City" type="text"></input><br></br>
      State: <input placeholder="State" type="text"></input><br></br>
      Zip Code: <input placeholder="Zip Code" type="text"></input><br></br>
      Phone Number: <input placeholder="Phone Number" type="text"></input><br></br>
      <button onClick={props.submitF2}>Submit</button>
    </div>
  )
}

//credit card #, expiry date, CVV, and billing zip code

const F3 = (props) => {
  return (
    <div className="input-fields">
      <div>Please payment details</div>
      Credit Card: <input placeholder="Credit Card" type="text"></input><br></br>
      Expiration: <input placeholder="Expiration" type="text"></input><br></br>
      CVV: <input placeholder="CVV" type="text"></input><br></br>
      Billing Zip Code: <input placeholder="Billing Zip Code" type="text"></input><br></br>
      <button onClick={props.submitF3}>Submit</button>
    </div>
  )
}

const Confirm = (props) => {
  console.log("Props:", props);
  return (
    <div className="confirmation-page">
      Confirmation page lives here.
      <p><b>Name: </b>{props.props.userData.name}</p>
      <p><b>Email: </b>{props.props.userData.email}</p>
      <p><b>Password: </b>{props.props.userData.password}</p>
      <p><b>Address1: </b>{props.props.locData.address1}</p>
      <p><b>Address2: </b>{props.props.locData.address2}</p>
      <p><b>City: </b>{props.props.locData.city}</p>
      <p><b>State: </b>{props.props.locData.state}</p>
      <p><b>Zip Code: </b>{props.props.locData.zipCode}</p>
      <p><b>Phone Number: </b>{props.props.locData.phoneNum}</p>
      <p><b>Card #: </b>{props.props.cardData.cardNum}</p>
      <p><b>Expires: </b>{props.props.cardData.expires}</p>
      <p><b>CVV: </b>{props.props.cardData.cvv}</p>
      <p><b>Billing Zip Code: </b>{props.props.userData.billingCode}</p>
      <button onClick={props.returnToMain}>Return to main page</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
