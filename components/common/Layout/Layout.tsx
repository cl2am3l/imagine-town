
import NavBar from '../Navbar'
import Footer from '../Footer'
import react from 'react'

function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer/>
        </>
    )
}
export default Layout