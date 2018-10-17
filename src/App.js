import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      option :'',
      text :'',
      finaltext : ''
    };
  }

  handleChange(event) {
    this.setState({option: event.target.value});
  }

  onChangeInput(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event)
  {
    switch(this.state.option)
    {
      case "UPPERCASE" : this.setState({finaltext:this.state.text.toUpperCase()});
                         break;
      case "LOWERCASE" : this.setState({finaltext:this.state.text.toLowerCase()});
                         break;
      case "NONE" : this.setState({finaltext:this.state.text});
                         break;  
      default: break;
    }
    
    event.preventDefault();
  }

  render() {
    return (
      <div className="Character-Case">
        <header className="Case-Header">
          <img src={logo} className="Case-Logo" alt="logo" />
          <h1 className="Case-Title">Character Case</h1>
        </header>
       
        <div className="Case-Body">
        <div className='Case-Div'>
         <textarea className="Case-Input" value={this.state.text} onChange={this.onChangeInput.bind(this)}/>
        </div>
        <div className='Case-Div'>
        <div className='Case-Select'>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          PICK A CASE TYPE
        </label>
          <select  className="Case-SelectType" value={this.state.option} onChange={this.handleChange.bind(this)}>
            <option value="UPPERCASE">UPPERCASE</option>
            <option value="LOWERCASE">LOWERCASE</option>
            <option value="NONE">NONE</option>
         </select>
        <input type="submit" value="SUBMIT" className='Case-Submit'/>
        </form>
        </div>
        </div>
        <div className='Case-Div'>
        <textarea className="Case-Output" value ={this.state.finaltext}/>
        </div>
        </div>  
      </div>
    );
  }
}

export default App;
