import React from "react";

import logotype from '../images/logo.svg'

export default function M_Footer (
    {menuLinksLeft, menuLinksRight}
) {
     
    return (
          <footer className="footer">
      <div className="footer_container">
<div className="footer_logo"><img src={logotype} /></div>
      </div>
    </footer>
    )
}