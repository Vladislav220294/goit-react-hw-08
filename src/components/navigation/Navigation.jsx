import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <header >
      <nav >
        <ul className={css.list}>
          <li>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          {isLoggedIn && <li>
            
              <NavLink className={css.link} to="/contacts">
                Contacts
              </NavLink>
            
          </li>}
          
        </ul>
      </nav>
    </header>
  );
}