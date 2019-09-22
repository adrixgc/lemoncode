import * as React from 'react';
import ReactDOM from "react-dom";
import { HelloComponent } from './HelloComponent';

class Main extends React.Component{
  
  render(){
    return <HelloComponent initialName="desconocido"/>;
  }

}

ReactDOM.render(<Main />, document.getElementById("index"));