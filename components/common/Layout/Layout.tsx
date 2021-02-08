
import NavBar from '../Navbar'
import Footer from '../Footer'
import react from 'react'

function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer/>
        </div>
    )
}
export default Layout