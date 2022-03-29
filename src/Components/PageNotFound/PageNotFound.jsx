import React from 'react'
import notFoundPic from '../../imgs/Mard Wshwshny1.png';
export default function PageNotFound() {
  return (
        <div className='container'>
            <div className='row'>
                <img src={notFoundPic} alt="Page Not Found" className=' m-auto col-md-4 ' style={{width: '400px'}} />
                <div className='notFoundInfo m-auto  text-lg-start text-center  col-md-6 col-sm-12 '>
                    <h2 className='fw-bold'>OOPS! PAGE <br/> NOT FOUND.</h2>
                    <p>You must have picked the wrong door because I  
                        havn't <br /> been able to lay my eye on the page you've
                        been searching for.
                    </p>
                </div>
            </div>
        </div>
    )
}
