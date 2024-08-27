import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order all your favorites here!</h2>
        <p>Choose from our diverse menu that features a variety of dishes specially made by top chefs with the freshest ingredients available. We are here to satisfy your cravings, with each delicious order.</p>
        <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
