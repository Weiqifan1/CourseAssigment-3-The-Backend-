import React from 'react';
import LOGO3 from './images/LOGO3.png'

function Title(props) {
  return <h2> {props.title}</h2>;
}

//Header for the page.
function Header() {

  return (
    
    <div>

      <header className="App-header">
        <img src={LOGO3}  alt="logo" className="centerImage" />
        <Title title="CuisineByChoice" />
      </header>

    </div>);
}

export default Header;
