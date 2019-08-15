
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: FrontPage,
      // User data
      name: null,
      email: null,
      password: null,
      // Location data
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      phoneNum: null,
      // Card data
      cardNum: null,
      expires: null,
      cvv: null,
      billingCode: null,
    }
    this.clickCheckout = this.clickCheckout.bind(this);
    this.submitF1 = this.submitF1.bind(this);
    this.submitF2 = this.submitF2.bind(this);
    this.submitF3 = this.submitF3.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
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
    this.setState({
      currentView: FrontPage,
      name: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      phoneNum: null,
      cardNum: null,
      expires: null,
      cvv: null,
      billingCode: null,
    });
  }

  onFieldChange(event) {
    let key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div>
      <h1>Nozama - Buy Stuff!</h1>
      {this.state.currentView === FrontPage ? (
        <this.state.currentView checkout={this.clickCheckout} />
      ) :
      this.state.currentView === F1 ? (
        <this.state.currentView onFieldChange={this.onFieldChange} submitF1={this.submitF1} />
      ) :
      this.state.currentView === F2 ? (
        <this.state.currentView onFieldChange={this.onFieldChange} submitF2={this.submitF2} />
      ) :
      this.state.currentView === F3 ? (
        <this.state.currentView onFieldChange={this.onFieldChange} submitF3={this.submitF3} />
      ) : (
        <this.state.currentView onFieldChange={this.onFieldChange} returnToMain={this.returnToMain} props={this.state}/>
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
      Name: <input onChange={props.onFieldChange} id="name" placeholder="Name" type="text"></input><br></br>
      Email: <input onChange={props.onFieldChange} id="email" placeholder="Email" type="text"></input><br></br>
      Password: <input onChange={props.onFieldChange} id="password" placeholder="Password" type="text"></input><br></br>
      <button onClick={props.submitF1}>Submit</button>
    </div>
  )
}

const F2 = (props) => {
  return (
    <div className="input-fields">
      <div>Please delivery address</div>
      Address: <input onChange={props.onFieldChange} id="address1" placeholder="Address" type="text"></input><br></br>
      Apt: <input onChange={props.onFieldChange} id="address2" placeholder="Apt" type="text"></input><br></br>
      City: <input onChange={props.onFieldChange} id="city" placeholder="City" type="text"></input><br></br>
      State: <input onChange={props.onFieldChange} id="state" placeholder="State" type="text"></input><br></br>
      Zip Code: <input onChange={props.onFieldChange} id="zipCode" placeholder="Zip Code" type="text"></input><br></br>
      Phone Number: <input onChange={props.onFieldChange} id="phoneNum" placeholder="Phone Number" type="text"></input><br></br>
      <button onClick={props.submitF2}>Submit</button>
    </div>
  )
}

//credit card #, expiry date, CVV, and billing zip code

const F3 = (props) => {
  return (
    <div className="input-fields">
      <div>Please payment details</div>
      Credit Card: <input onChange={props.onFieldChange} id="cardNum" placeholder="Credit Card" type="text"></input><br></br>
      Expiration: <input onChange={props.onFieldChange} id="expires" placeholder="Expiration" type="text"></input><br></br>
      CVV: <input onChange={props.onFieldChange} id="cvv" placeholder="CVV" type="text"></input><br></br>
      Billing Zip Code: <input onChange={props.onFieldChange} id="billingCode" placeholder="Billing Zip Code" type="text"></input><br></br>
      <button onClick={props.submitF3}>Submit</button>
    </div>
  )
}

const Confirm = (props) => {
  console.log("Props:", props);
  return (
    <div className="confirmation-page">
      Confirmation page lives here.
      <p><b>Name: </b>{props.props.name}</p>
      <p><b>Email: </b>{props.props.email}</p>
      <p><b>Password: </b>{props.props.password}</p>
      <p><b>Address1: </b>{props.props.address1}</p>
      <p><b>Address2: </b>{props.props.address2}</p>
      <p><b>City: </b>{props.props.city}</p>
      <p><b>State: </b>{props.props.state}</p>
      <p><b>Zip Code: </b>{props.props.zipCode}</p>
      <p><b>Phone Number: </b>{props.props.phoneNum}</p>
      <p><b>Card #: </b>{props.props.cardNum}</p>
      <p><b>Expires: </b>{props.props.expires}</p>
      <p><b>CVV: </b>{props.props.cvv}</p>
      <p><b>Billing Zip Code: </b>{props.props.billingCode}</p>
      <button onClick={props.returnToMain}>Purchase</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
