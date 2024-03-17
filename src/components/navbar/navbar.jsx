import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div id="navbar">
      <section>
        <img src={logo} alt="logo" />
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/favorite" >Favorite</NavLink>
            <NavLink to="/admin" >Admin</NavLink>
        </nav>
      </section>
    </div>
  )
}
