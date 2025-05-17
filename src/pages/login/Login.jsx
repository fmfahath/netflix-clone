import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import { Link } from 'react-router-dom'

const Login = () => {

    const [signState, setSignState] = useState('Sign In')
    const [email, setEmail] = useState('test@gmail.com')
    const [password, setPassword] = useState('test@123')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    const user_auth = async (event) => {
        event.preventDefault()

        setLoading(true)

        if (signState === "Sign In") {
            await login(email, password)
        }
        else {
            await signup(name, email, password)
        }

        setLoading(false)
    }

    return (
        loading ? <div className="login-spinner">
            <img src={netflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <Link to={'/'}><img src={logo} alt="" className='login-logo' /></Link>
                <div className="login-form">
                    <h1>{signState}</h1>
                    <form >
                        {signState === "Sign Up" ? <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /> : <></>}
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={user_auth} type='submit'>{signState}</button>
                        <div className='from-help'>
                            <div className="remember">
                                <input type="checkbox" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className='form-switch'>
                        {signState === "Sign In" ?
                            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p> :
                            <p>Already have Account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>}


                    </div>
                </div>
            </div>
    )
}

export default Login