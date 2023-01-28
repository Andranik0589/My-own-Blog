import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'



const NavBar = () => {

    const isAuth = false
    const activeStyle = {
        color: 'white'
    }


    return (
        <div className="Navbar_container">
            <span>E</span>
            {isAuth && <ul>
                <li><NavLink to={'/'} style={
                    ({ isActive }) => isActive ? activeStyle : undefined}>Главная</NavLink>
                </li>
                <li><NavLink to={'/posts'} style={
                    ({ isActive }) => isActive ? activeStyle : undefined}>Мои Посты</NavLink></li>
                <li><NavLink to={'/new'} style={
                    ({ isActive }) => isActive ? activeStyle : undefined}>Добавить Посты</NavLink></li>
            </ul>}
            <div>
                {isAuth ? (<button>Выйти</button>) : (<Link to={'/login'} >Войти</Link>)}
            </div>

        </div>
    )
}

export default NavBar