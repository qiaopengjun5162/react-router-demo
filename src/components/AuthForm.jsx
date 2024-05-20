import React, { useRef, useState } from 'react'
import classes from './AuthForm.module.css'

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const usernameInput = useRef()
    const passwordInput = useRef()
    const emailInput = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const username = usernameInput.current.value
        const password = passwordInput.current.value
        const email = emailInput.current.value

        if (isLoginForm) {
            // login logic
            console.log('login', username, password)

        } else {
            // signup logic
            console.log('signup', username, password, email)
        }

    }
    return (
        <div >
            <h2 className={classes.title}>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <input ref={usernameInput} type="text" placeholder="Username" />
                </div>
                {
                    !isLoginForm && <div className={classes.control}>
                        <input ref={emailInput} type="email" placeholder="Email" />
                    </div>
                }
                <div className={classes.control}>
                    <input ref={passwordInput} type="password" placeholder="Password" />
                </div>
                <div className={classes.actions}>
                    <button type="submit">{isLoginForm ? 'Login' : 'Sign Up'}</button>
                    <a href="#" onClick={() => setIsLoginForm((prevState) => !prevState)}>
                        {isLoginForm ? 'Create new account' : 'Login with existing account'}
                    </a>
                </div>
            </form>
        </div>
    )
}

export default AuthForm
