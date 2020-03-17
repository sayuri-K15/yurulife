import React, { Component } from 'react'

import Header from "../components/Header"
import SideMenu from "../components/SideMenu"
import SideRanking from "../components/SideRanking"
import Footer from "../components/Footer"


const Trip = () => {
    return (
      <div>
        <Header />
        <SideMenu />
        <SideRanking />
        <Footer />
      </div>
    )
}

export default Trip;