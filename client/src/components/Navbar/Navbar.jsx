import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
import { AuthContext } from "../../context/AuthContext";
function Navbar() {

    const [open, setOpen] = useState(false)
    const {currentUser} = useContext(AuthContext)

    return (
        <nav>
            <div className="left">
                <a href="/"  className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>MetoEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
             {currentUser ? (
             
             <div className="user">
         <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
      
            
                  <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>

             </div>) :   ( <> <a href="/login">Login</a>
                <a href="/register" >Sign Up</a> 
                </> 
                 )}

                <div className="menuIcon">
                    <img src="/menu.png" 
                    alt="menu" 
                    onClick={() => setOpen(prev=>!prev)}
                    />

                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Login</a>
                <a href="/" className="register">Sign Up</a>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;