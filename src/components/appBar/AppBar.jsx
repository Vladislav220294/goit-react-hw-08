import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'
import AuthNav from '../authNav/AuthNav'
import css from './AppBar.module.css'
import {selectIsLoggedIn} from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header className={css.list}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
           
            
            
        </header>
    )
}