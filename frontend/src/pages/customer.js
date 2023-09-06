import React from 'react';
import {Link} from 'react-router-dom';
import {registerRequest} from '../api/auth.js'
import {useForm} from 'react-hook-form'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';


function Customer() {
    const {handleSubmit, register} =useForm();

  return (
    <form
        onSubmit={handleSubmit(async(values)=>{
            const res = await registerRequest(values)
            
            console.log(values);
        })
        }
            
    >
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Rellena los campos</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Ci'  type='number' size="lg"  {...register('Ci',{required:true})}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Nombre' type='text' size="lg" {...register('Nombre',{required:true})}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='App' type='text' size="lg" {...register('App',{required:true})}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Apm' type='text' size="lg" {...register('Apm',{required:true})}/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' type='text' size="lg" {...register('Username',{required:true})}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' type='password' size="lg" {...register('Pasword',{required:true})}/>
            
              <MDBBtn outline className='mx-2 px-5' type='submit' color='light' size='lg'>
                Register
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

    </form>
  );
}

export default Customer;