import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import  data from '../src/data';

class App extends Component {
state = {
myData : data
}
componentWillMount() {
 console.log('hello');
//  format data into table 
const obj = {

}
}
  getResult = (e) => {
    e.preventDefault();
console.log('value' , data);

  }
  render() {
    return (
      <div className="App">

     <Navbar getInput = {this.getResult}/>
     <Table  tableData = {this.state.myData}/>
      </div>
    );
  }
}

export default App;
