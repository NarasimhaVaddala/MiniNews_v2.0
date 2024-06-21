import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
            <div className="container ">
                <Link className="navbar-brand" to="/">MiniNews 2.0</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                
                                <li><Link className="dropdown-item" to="/health">health</Link></li>
                                <li><Link className="dropdown-item" to="/science">science</Link></li>
                                <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                                <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
                            
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar


// business entertainment general health science sports technology