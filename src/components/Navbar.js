
import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <div className='flex'>
            <Link to="/" >
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

                {/* Login - Signup - Logout - Dashboard */}

                <div className='flex'>
                    {
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    }

{
                        <Link to="/Signup">
                            <button>Signup</button>
                        </Link>
                    }


{
                        <Link to="/">
                            <button>Log OUt</button>
                        </Link>
                    }


{
                        <Link to="/Dashboard">
                            <button>Dashboard</button>
                        </Link>
                    }


                </div>

            </nav>

        </div>
    )
}

export default Navbar