import React from 'react'
import logo from './logo.png';
import "./landing.css"
import background from "./climbing-image.png"




export default function Landing() {
  return (
    <div>
        <img className='climberbg' src={background} alt='climberbg' />
        <header>
        <img src={logo} alt='Logo' />
        <ul>
          <a href="/about"><li className='about'>About Us</li></a>
          <a href="/login"><li className='log'>Login</li></a>
        </ul>
        </header>
    <body>

        <h1 className="quote">"A investment in Knowledge Pays the best interest"</h1>
        <a href='/register'><button className="start" type="submit">Get Started</button></a>
    </body>
    </div>
  )
}
