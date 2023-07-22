import React from 'react'
import { Input } from './atoms'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate= useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      console.log('Login successful!');
      alert("Login Berhasil!!");
      navigate("/dashboard");
    } else {
      console.log('Login gagal!');
      alert("Login gagal!")
    }
  };
  return (
    <div>
        <Navbar />
        <div className='container '>
        <div className='row'>
        <div className='col-md-6 mx-auto '>
            <form>
                <div className='card mt-5'>

                <div className='card-header'>
                    Form Login
                </div>
                <div className='card-body'>
                    <Input label='email' type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <Input label='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success btn-block' onClick={handleLogin}>Login</button>
                </div>
                </div>
            </form>
        </div>

        </div>

        </div>
    </div>
  )
}

export default Login