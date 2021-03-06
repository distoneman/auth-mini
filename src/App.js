import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      user: {}
    }
  }

  async signup() {
    let res = await axios.post('/api/signup', {
      email: this.state.emailInput,
      password: this.state.passwordInput
    })
    this.setState({
      user: res.data.userData
    })
  }

  async login() {
    let res = await axios.post('/api/login', {
      email: this.state.emailInput,
      password: this.state.passwordInput
    })
    this.setState({
      user: res.data.userData
    })
  }

  async logout() {
    let res = await axios.get('/logout')
    this.setState({user: {}})
  }

  render() {
    return (
      <div className="App">
        <h1>Auth Mini</h1>
        <p>
          Email: <input type="text" onChange={(e) => this.setState({ emailInput: e.target.value })} />
        </p>
        <p>
          Password: <input type="password" onChange={(e) => this.setState({ passwordInput: e.target.value })} />
        </p>
        <button onClick={() => this.signup()}>Signup</button>
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.logout()}>Logout</button>
        <hr/>
        <p>USER:{JSON.stringify(this.state.user)}</p>
      </div>
    );
  }
}

export default App;
