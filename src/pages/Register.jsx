import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    
    const submitForm = (e) => {
            e.preventDefault()
            const formData = {fullName, email, phoneNumber, password}
            console.log(formData)
    }
  return (
    <>
    <div className="formContainer d-flex justify-content-center align-items-center vh-100 ">
        <form onSubmit={submitForm} action="" className='border rounded bg-light p-5'>
            <h2 className='text-center text-secondary'>Register</h2>
            <div className='input-container my-3'>
                <label htmlFor="">Fullname:</label>
                <input 
                    value={fullName} 
                    className='bg-white'
                    onChange={(e) => setFullName(e.target.value)} 
                    type="text" 
                    placeholder='Enter your fullname' />
            </div>

            <div className='input-container my-3'>
                <label htmlFor="">Email:</label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value) } 
                type="email" 
                placeholder='Enter your Email address' />
            </div>

            <div className='input-container my-3'>
                <label htmlFor="">Phone Number:</label>
                <input 
                value={phoneNumber} type="tel" 
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter your Phone number' />
            </div>

            <div className='input-container my-3'>
                <label htmlFor="">Password:</label>
                <input 
                value={password} type="password" 
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your Password' />
            </div>

            <div className="btn-container my-3">
                <button className='btn btn-primary w-100' >Register</button>
            </div> 
        </form>
    </div>
    </>
  )
}

export default Register