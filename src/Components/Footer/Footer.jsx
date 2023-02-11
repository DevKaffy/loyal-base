import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className=".footer"></div>
      <div className='footer-flex'>
        <div className="footer-left">
          <img src="/house2.png" alt="" />
          <p>
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <p className='text-[1.25rem]'>Loyalbaze is almost here.</p>
        <div className="footer-right">
          <img src="/Vector.png" alt="" />
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer