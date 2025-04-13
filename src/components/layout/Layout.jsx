import AppBar from '../appBar/AppBar'

export default function Layout({ children }) {
    return (
        <div>
            <AppBar />
            {children}
        </div>
    )
}