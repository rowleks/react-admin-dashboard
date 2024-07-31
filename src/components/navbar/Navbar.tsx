import { Link } from "react-router-dom"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Lamadmin</span>

      </Link>

    <div className="right-nav">
      <div className="box1">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />

        <div className="notif">
        <img src="/notifications.svg" alt="" />
        <span className="notif-count">3</span>

        </div>
      </div>

      <div className="box2">
        <div className="user">
        <img src="/profile.svg" alt="" />
        <span>John</span>
        </div>
      </div>

        <div className="setting">
          <img src="/settings.svg" alt="" />
        </div>
      </div>

      </div>
      
  )
}

export default Navbar
