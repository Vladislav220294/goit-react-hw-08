import { NavLink, Link } from "react-router";
import css from './AuthNav.module.css'

export default function AuthNav() {
  return (
    <div> 
      <nav><ul className={css.list}><li><NavLink className={css.link} to="/register">
        Register
      </NavLink ></li>
      <li><NavLink className={css.link} to="/login">
        Log In
      </NavLink></li></ul></nav>
      
      
    </div>
  );
}