import React from 'react'
import './LoginPage.scss'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <form onSubmit={(event) => event.preventDefault}>
                <h1>Авторизация</h1>
                <label htmlFor="">
                    <span>Username:</span>
                    <input type="text" placeholder='Username' />
                </label>
                <label htmlFor="">
                    <span>Password:</span>
                    <input type="text" placeholder='Password' />
                </label>
                <div>
                    <button type='submit'>Войти</button>
                    <Link to={'/register'}>Нет аккаунта</Link>
                </div>
            </form>
        </>
    )
}

export default LoginPage