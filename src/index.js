import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/loading';
import Logo from './components/logo';
import Container from './components/container';
import './css/common.css';
import './css/main.css';
import './css/hover-min.css'

const root = document.querySelector('.root');


const Header = () => {
    return <header>
      <h1>Knowing TW</h1>
    </header>
  };
  
class App extends React.Component{
    render(){
        return(
        <div>
        <Logo />
        <Container />
        </div>)
    }
}

ReactDOM.render(<App />
    , root);