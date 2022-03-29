import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() 
{

  let[user,setUser] = useState({email: "", password: "" });
  let[loading, setLoading] = useState(false)
  let[error, setError] = useState('');
  let[validationErrors, setValidationErrors] = useState([])
  const navigate = useNavigate();

  function getUser(e)
  {
    let c_user = {...user}; //deep cloning (a real copy)
    c_user[e.target.name] = e.target.value;
    setUser(c_user)
  }

  async function formSubmision(e)
  {
    e.preventDefault();
    setLoading(true);

    let validationResponse = userValidation();
    if(validationResponse.error)
    {
      setLoading(false);
      setValidationErrors(validationResponse.error.details);
    }
    else
    {
      setLoading(false);

      let {data} =await axios.post('https://route-egypt-api.herokuapp.com/signup', user);
      if(data.message === 'success')
      {
        navigate('/login');
      }
      else
      {
        setError(data.message);  
      } 
    } 

  }

  function userValidation()
  {
    const schema = Joi.object(
    {
      first_name: Joi.string().alphanum().min(3).max(30).required(),
      last_name: Joi.string().alphanum().min(3).max(30).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email( {tlds: {tlds: ['com','net','org','eg']}} ).required(),
      password: Joi.string().required()
      /* password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2.8}$')).required() */
    });

    return schema.validate(user, {abortEarly:false});
  }


  return(
    <>
    
    <div className='w-50 mx-auto py-4'>
      <form onSubmit={formSubmision} >
        {/* error? <div className='alert alert-danger'>{error}</div> : '' */}
        {error && <div className='alert alert-danger'>{error}</div>   /* first false, last true */} 
        {validationErrors.map( (validationError, index)=> index === validationErrors.length-1? <div key={index} className='alert alert-danger p-1'>Password invalid</div> : <div key={index} className='alert alert-danger p-1'>{validationError.message}</div> ) /* to not putting out the joi pattern */}


        <label htmlFor="first_name">First Name</label>
        <input onChange={getUser} type="text" name='first_name' className='form-control mt-1 mb-3' />

        <label htmlFor="last_name">Last Name</label>
        <input onChange={getUser} type="text" name='last_name' className='form-control mt-1 mb-3'/>

        <label htmlFor="age">Age</label>
        <input onChange={getUser} type="age" name='age' className='form-control mt-1 mb-3'/>

        <label htmlFor="email">Email</label>
        <input onChange={getUser} type="email" name='email' className='form-control mt-1 mb-3'/>

        <label htmlFor="password">Password</label>
        <input onChange={getUser} type="password" name='password' className='form-control mt-1 mb-3'/>        
      
        <button type='submit' className='btn btn-info mt-3 fw-bold text-light'>
            {loading? <i className="fas fa-spinner fa-spin"></i> : 'Register'}          
        </button>
      </form>
    </div>
    
    </>
    )
}
