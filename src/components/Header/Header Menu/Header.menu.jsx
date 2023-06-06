import React from 'react'
import header_logo from  '../Logo/logo.png'

const Header = () => {
    return (<div className='header' >
        <img src={header_logo} alt="" />
        <ul className='header-ul'>
            <li>Главная</li>
            <li className='middle-item'>О нас </li>
            <li>Контакты</li>
        </ul>

    </div>)
}

export default Header