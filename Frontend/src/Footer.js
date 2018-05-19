import React from 'react'
import  LOGO3 from './images/LOGO3.png' 

//Footer for page.
//It could contain a dummy address and lorem ipsum information.
  function Footer() {
    return ( 
      <div className="Footer">

        <footer className="App-footer">

          <p>
            <img src={LOGO3} className="App-logo" alt="logo"  />
            Cuisine By Choice - The DataBuilders 2018 
          </p>

        </footer>

      </div>
    );
  }
  
  export default Footer;
