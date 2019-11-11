import React, { Component } from 'react';import logo from './logo.svg';
import './App.css';
import Companies from './components/company';
class App extends Component {

  state = {
    companies: []
  }
  componentDidMount() {
    fetch('http://192.168.1.129:3000/company/funding_rounds/Digg')
    .then(res => res.json())
    .then((data) => {
      this.setState({ companies: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Companies companies={this.state.companies} />
    )
  }
}

export default App