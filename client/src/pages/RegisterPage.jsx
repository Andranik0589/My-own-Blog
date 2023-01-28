import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterPage.scss'
const RegisterPage = () => {
    return (
        <>
            <form onSubmit={(event) => event.preventDefault}>
                <h1>Регистрация</h1>
                <label htmlFor="">
                    <span>Username:</span>
                    <input type="text" placeholder='Username' />
                </label>
                <label htmlFor="">
                    <span>Password:</span>
                    <input type="text" placeholder='Password' />
                </label>
                <div>
                    <button type='submit'>Подтвердить</button>
                    <Link to={'/login'}>Уже зарегистрированы?</Link>
                </div>
            </form>
        </>
    )
}

export default RegisterPage