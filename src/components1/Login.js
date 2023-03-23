import React from 'react'
import { Input } from './atoms'
import Navbar from './Navbar'

const Login = () => {
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
                    <Input label='email' type='email'/>
                    <Input label='password' type='password'/>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success btn-block'>Login</button>
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