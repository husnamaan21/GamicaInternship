import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper  teal lighten-2">
                    <Link class="brand-logo" to="/">Shoes Store</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/men">Men</Link></li>
                        
                        <li><Link to="/women" >Women</Link></li>
                        <li><Link to="/kids">Kids</Link></li>
                      
                    </ul>
                </div>
            </nav>
        </div>
    )
}