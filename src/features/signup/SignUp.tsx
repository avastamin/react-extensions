import React from 'react';
import HomeLogo from '../../img/HomeLogo.svg';
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { useAppDispatch } from '../../app/hooks';
import {
  addSignup,
} from './signupSlice';

interface Values {
  email: string;
  phone: string;
  signupType: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().when('signupType',{
    is: (signupType: string) => signupType === 'email',
    then: Yup.string().email('Invalid email').required('Required')
  }),
  phone: Yup.string().when('signupType',{
    is: (signupType: string) => signupType === 'phone',
    then: Yup.string()
    .min(7, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  }),
});

const  SignUp : React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const initialValues: Values = { 
    email: '',
    phone: '',
    signupType: 'email' 
  };
  return (
    <div className="container h-38">
      <header className='bg-gray-700 p-4 border-b-2 border-gray-50'>
        <img className='w-105 mr-auto ml-auto' src={HomeLogo} alt="Logo" />
      </header>
      <div className='p-6'>
        <div className='text-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            dispatch(addSignup(values))
          }}
        >
          {({ values, errors, touched }) => (
          <Form>
            <div role="group" aria-labelledby="my-radio-group" className='pb-6'>
              <label className={`w-66 py-1.5 px-3  rounded-xl mr-4 ${values.signupType === 'email' ? 'border border-gray-500 bg-gray-800' : 'border border-white'}`} >
                <Field type="radio" name="signupType" value="email" className='hidden'/>
                Email
              </label>
              <label className={`w-66 py-1.5 px-3  rounded-xl mr-4 ${values.signupType === 'phone' ? 'border border-gray-500 bg-gray-800' : 'border border-white'}`} >
                <Field type="radio" name="signupType" value="phone" className='hidden'/>
                Phone
              </label>
            </div>
            {values.signupType === 'email' 
              ? <div>
                  <Field 
                    name="email" 
                    type="email" 
                    placeholder="johndoe@domain.com" 
                    className='w-full py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-md mr-4' 
                  />
                  {errors.email && touched.email ? (
                    <div className='text-red-500 text-left'>{errors.email}</div>
                  ) : null}
                </div>
              : <div>
                <Field 
                  name="phone" 
                  type="number" 
                  placeholder="Ex (337) 378 8383"
                  className='w-full py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-md mr-4' 
                />
                {errors.phone && touched.phone ? (
                  <div className='text-red-500 text-left'>{errors.phone}</div>
                ) : null}
              </div>
            }
            <button
              disabled={(values.email === '' && values.signupType === 'email') || (values.signupType === 'phone' && values.phone === '')}
              className={`flex items-center h-22 py-2 pr-4 pl-7 mt-5 mr-auto ml-auto text-white border-gray-500 rounded-lg 
                ${!!errors && ((values.email !== '' && values.signupType === 'email') || (values.signupType === 'phone' && values.phone !== '')) 
                  ? 'bg-accent-2' : 'bg-gray-500'}`
              }
            >
              Continue
              <ChevronRightIcon className='w-5'/>
            </button>
          </Form>
          )}
        </Formik>
        </div>
        <div className='text-center mt-4'>
          <p className='text-gray-200 text-sm'>by clicking continue you must agree to near labs 
            <button className='text-blue-100'> Terms & Conditions ans Privacy Policy</button></p>
        </div>
        <div className='w-full h-px my-8 bg-gray-500'></div>
        <div className='text-center mt-4'>
          <p>Already have NEAR account?</p>
          <button className='h-22 py-2 pr-4 pl-7 mt-2 mr-auto ml-auto text-white bg-gray-200 border border-gray-500 rounded-lg'>Login in with NEAR</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
