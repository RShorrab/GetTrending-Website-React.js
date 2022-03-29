import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import TrendingContextProvider from '../TrendingContext/TrendingContext.jsx';

//Pages
import Navbar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import Movies from '../Movies/Movies.jsx';
import Tv from '../Tv/Tv.jsx';
import Actors from '../Actors/Actors.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';


export default function App() 
{
  const [loginInfo, setLoginInfo] = useState(null)
  const navigate = useNavigate();

  function getUserInfo()
  {
    const encodedToken = localStorage.getItem('userToken');
    const decodedToken = jwtDecode(encodedToken);
    setLoginInfo(decodedToken);
  }
  useEffect(() => 
  {
    if(localStorage.getItem('userToken')) 
    {getUserInfo()}
  }, [])
  

  function LogOut()
  {
    localStorage.removeItem('userInfo');
    setLoginInfo(null);
    navigate('/login');
  }

  return (
    <> 
      <Navbar loginInfo={loginInfo} LogOut={LogOut} /> 
       <TrendingContextProvider>  
        <Routes>
          <Route path='/' element={<Navigate to={'home'}/>} />
          <Route path='home' element={<Home/>} />   
          <Route path='movies' element={<Movies/>} />   
          <Route path='tv' element={<Tv/>} />  
          <Route path='actors' element={<Actors/>} /> 
          <Route path='pageNotFound' element={ <PageNotFound/> } />  
          <Route path='*' element={<Navigate to={ 'PageNotFound' }/>} />

          
          <Route path='login' element={<Login getUserInfo={getUserInfo} />} />
          <Route path='register' element={<Register/>} />
        </Routes>
      </TrendingContextProvider> 
      

    </>
  )
  /*
    1-protectedRoute
    2-Context
  */
}
