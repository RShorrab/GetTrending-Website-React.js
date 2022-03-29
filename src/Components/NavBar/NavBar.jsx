import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../imgs/logo.webp'
export default function NavBar(props) 
{
  let {loginInfo} = props;
  console.log(loginInfo);
  return (
    <>
      <nav className='d-flex justify-content-between p-3'>
          <ul className='list-unstyled d-flex'>
              <li className='m-2'> <NavLink to='/'>  <img src={Logo} alt="website logo" style={{width:'75px'}}/>  </NavLink> </li>
              <li className='m-2'> <NavLink to='/'> Home </NavLink> </li>
              <li className='m-2'> <NavLink to='movies'> Movies </NavLink> </li>
              <li className='m-2'> <NavLink to='tv'> TV </NavLink> </li>
              <li className='m-2'> <NavLink to='actors'> Actors </NavLink> </li>
          </ul>
          
          <ul className='list-unstyled  d-flex'>
              {props.loginInfo? <li> <h6 className='m-2 me-3 fw-bold text-muted'>Hello {loginInfo.first_name}! </h6> </li> : '' }
              <li className='m-2'> <a href="https://www.instagram.com/" target={'_blank'}> <i className='fab fa-instagram'></i> </a> </li>
              <li className='m-2'> <a href="https://www.facebook.com/" target={'_blank'}> <i className='fab fa-facebook'></i> </a> </li>

              {props.loginInfo?
                <li onClick={props.LogOut} className='m-2 pointer' > Logout </li>  :
                <>
                  <li className='m-2'> <NavLink to='register'> Register </NavLink> </li>
                  <li className='m-2'> <NavLink to='login'> Login </NavLink> </li>
                </>
              }              
          </ul>
      </nav>
    </>
  )
}
