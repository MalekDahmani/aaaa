import React from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () =>{

    const {logout} = useLogout()
    const {user} = useAuthContext()

    return(
        <div className='navbar'>
            <div className='nav'>
                 <Link to="/"><h1>Gym </h1></Link>
                 <ul>
                    {user && (
                        <>
                           <li>
                               <p>{user.email}</p>
                           </li>
                           <li>
                               <button className='logout' onClick={logout}>Logout</button>
                           </li>
                        </>
                    )}
                    {!user && (
                        <>
                          <li>
                            <NavLink to="/login">Login</NavLink>
                          </li>
                          <li>
                            <NavLink to="/signup">Signup</NavLink>
                          </li>
                        </>
                    )}
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/nutrition">Nutrition</Link>
                    </li>
                 </ul>
            </div>
        </div>
    )
}

export default Navbar