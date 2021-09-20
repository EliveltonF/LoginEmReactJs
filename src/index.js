import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="icon"></div>
        <div className="form">
          <form>
            <label name="email" id="email">Email</label>
            
            <input type="email" id="inputEmail"></input>
            
            <label name="password" id="pass">Password</label>
            
            <input type="password" id="inputPass"></input>

            <input type="checkbox" id="inputCheck"></input>
            <label name="checkbox" id="checkbox">Remember me</label>
            <a>Forgot Password?</a>

            <button>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

