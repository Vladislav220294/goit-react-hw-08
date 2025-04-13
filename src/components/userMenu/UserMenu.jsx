import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import css from "./UserMenu.module.css"
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className={css.list}>
            <p>welcome, { user.name}</p>
            <button className={css.button} onClick={handleLogOut}>Logout</button>
        </div>
    )
    
}