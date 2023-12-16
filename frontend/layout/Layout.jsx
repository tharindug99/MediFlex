import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Routers from '../routes/Routers';
import NavBar from '../components/header/NavBar';

const Layout = () => {
  return (
    <>  
        <NavBar/>
        {/* <Header/> */}
        <main>
            <Routers/>
            <Routers/>
            <Routers/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout