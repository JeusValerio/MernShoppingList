import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap - css design templates for forms, tables, images
import './App.css';


class App extends Component {
  render(){
  return (

    <div className="App">

      <AppNavbar />

    </div>
  );

  }
  
}

export default App;
