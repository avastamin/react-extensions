import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { useAppSelector } from '../../app/hooks';
import {
  signupData,
} from './signupSlice';


interface Values {
  email: string;
  phone: string;
  picked: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().when('picked',{
    is: (picked: string) => picked === 'email',
    then: Yup.string().email('Invalid email').required('Required')
  }),
  phone: Yup.string().when('picked',{
    is: (picked: string) => picked === 'phone',
    then: Yup.string()
    .min(7, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  }),
});

const  CodeVerification : React.FC<{}> = () => {
  const usedData = useAppSelector(signupData);
  const initialValues: Values = { 
    email: '',
    phone: '',
    picked: 'email' 
  };
  return (
    <div className="container max-w-md">
      <header className='bg-gray-700 p-4 border-b-2 border-gray-50 flex flex-row text-black text-center relative'>
        <div className='grow'>Verification</div>
        <XCircleIcon className='w-7 text-gray-300 flex-none'/>
      </header>
      <div className='p-6 text-center'>
        <p className='text-gray-200'>We've sent a 6-digit verification code to 
          {usedData?.signupType === 'email' 
            ? ' the email address.' 
            : ' your phone'
          }
        </p>
        <p className='text-blue-100'>
          {usedData?.signupType === 'email' 
            ? usedData?.email 
            : usedData?.phone
          }
        </p>
      </div>
      <div className='p-3'>
        <div className='text-center'>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <div className='p-2 text-center'>
                  <p className='text-gray-10 pb-2'>Enter verification code</p>
                  <div className='grid grid-cols-6 gap-1'>
                    <Field 
                      name="ver1" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                    <Field 
                      name="ver2" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                    <Field 
                      name="ver3" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                    <Field 
                      name="ver4" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                    <Field 
                      name="ver5" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                    <Field 
                      name="ver6" 
                      type="number" 
                      className='w-12 h-12 border border-gray-500 bg-gray-50 rounded-md text-center'
                    />
                  </div>
                </div>
                <button
                  className={`flex items-center h-22 py-2 pr-4 pl-7 mt-5 mr-auto ml-auto text-white border-gray-500 rounded-lg 
                    ${!!errors  
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
        <div className='w-full h-px my-8 bg-gray-500'></div>
        <div className='text-center mt-4'>
          <p className='text-sm text-gray-200 mb-4'>Didn't receive your code?</p>
          <p className='text-blue-100 text-sm mb-4'>Send to a different email address</p>
          <p className='text-blue-100 text-sm'>Resend your code</p>
        </div>
      </div>
    </div>
  );
}

export default CodeVerification;
