import React from "react";

import logotype from '../images/logo.svg'

export default function M_Header (
    {menuLinksLeft, menuLinksRight}
) {
     const menuLeft = menuLinksLeft.map ((menuItem, i) => {
        return (<li key={i} className="header_text-big"> <a href={menuItem.link}> {menuItem.title} </a> </li>)
    })
    const menuRight = menuLinksRight.map ((menuItem, i) => {
        return (<li key={i} className="header_text-big"> <a href={menuItem.link}> {menuItem.title} </a> </li>)
    })
    return (
         <header className="header-main">
      <div className="header_bg">
        <div className="header_container container">
          <div className="container_block-one">
            <ul className="gap_50">
              {menuLeft}
            </ul>
          </div>

          <div className="header_logo"><img src={logotype} /></div>

          <div className="container_block-two">
            <ul className="gap_30">
              {menuRight}
            </ul>
          </div>

        </div>
      </div>
    </header>
    )
}