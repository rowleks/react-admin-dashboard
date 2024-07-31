import { NavLink } from "react-router-dom"
import "./menu.scss"

function Menu() {
  return (
    <div className="menu">

      <section className="menu-category">
        <div className="title">MAIN</div>
    
          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="/">
          <img src="/home.svg" alt="" />
          <span>Homepage</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="profile">
          <img src="/profile.svg" alt="" />
          <span>Profile</span>
          </NavLink>

      </section>
      
      <section className="menu-category">
        <div className="title">LISTS</div>
    
          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="users">
          <img src="/user.svg" alt="" />
          <span>Users</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="products">
          <img src="/product.svg" alt="" />
          <span>Products</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="orders">
          <img src="/order.svg" alt="" />
          <span>Orders</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="posts">
          <img src="/post2.svg" alt="" />
          <span>Posts</span>
          </NavLink>

      </section>

      <section className="menu-category">
        <div className="title">GENERAL</div>
    
          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="elements">
          <img src="/element.svg" alt="" />
          <span>Elements</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="notes">
          <img src="/note.svg" alt="" />
          <span>Notes</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="forms">
          <img src="/log.svg" alt="" />
          <span>Forms</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="calender">
          <img src="/calendar.svg" alt="" />
          <span>Calendar</span>
          </NavLink>

      </section>

      <section className="menu-category">
        <div className="title">MAINTENANCE</div>
    
          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="settings">
          <img src="/settings.svg" alt="" />
          <span>Settings</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="backups">
          <img src="/backup.svg" alt="" />
          <span>Backups</span>
          </NavLink>

      </section>

      <section className="menu-category">
        <div className="title">ANALYTICS</div>
    
          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="charts">
          <img src="/chart.svg" alt="" />
          <span>Charts</span>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')} to="logs">
          <img src="/log.svg" alt="" />
          <span>Logs</span>
          </NavLink>

      </section>
      


    </div>
    

  )
}

export default Menu
