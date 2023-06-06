import React from 'react'
import footer_logo from '../Footer logo/footerLogo.png'

function Footer() {
  return (
    <div className='footer'>
       <img id='foot-logo' src={footer_logo} alt="photo" />  
      <div className='footerList' >
        <ul className='f-list' >
          <li>Партнерам</li>
          <li className='middle-foot-item' >Разработчикам</li>
          <li>Вакансии</li>
        </ul>
      </div>
      <div className='copyright' > ООО "интукод",2020г.</div>

    </div>
  )
}

export default Footer