import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <form>
                        <div className='card mt-5'>
                            
                        <div className='card-header'>
                        Form Register
                        </div>
                        <div className='card-body'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='email' className='form-control'></input>
                            <label>Name</label>
                            <input type='text' className='form-control'/>                        
                            <label>Phone Number</label>
                            <input type='number' className='form-control'/>                        
                            <label>Gender</label>
                            <input type='text' className='form-control'/>
                        </div>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-success btn-block'>Register</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register