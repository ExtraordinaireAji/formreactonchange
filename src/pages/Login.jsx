import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLog = (e) => {
        e.preventDefault()
        const logData = {email, password}
        console.log(logData)
    }

  return (
    <>
    <div className="form-container d-flex justify-content-center align-items-center vh-100" >
        <form onSubmit={submitLog} action="" className='border rounded bg-light p-5'>
            <h2 className='text-center text-secondary'>Login Here</h2>
            <div className="input-container my-3">
            <label htmlFor="">Email</label>
            <input 
            value={email} type="email" 
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email' />
            </div>

            <div className="input-container my-3">
            <label htmlFor="">Password</label>
            <input 
            value={password} type="password" 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password' />
            </div>

            <button className='btn btn-primary w-100 '>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login