import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  signupData,
} from './signupSlice';


interface Values {
  fullName: string;
  accountID: string;
}

const NEARAccountSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  accountId: Yup.string().required('Required'),
});

const  CreateNEARAccount : React.FC<{}> = () => {
  const usedData = useAppSelector(signupData);
  const dispatch = useAppDispatch();
  const initialValues: Values = { 
    fullName: '',
    accountID: '',
  };
  return (
    <div className="container max-w-md">
      <header className='bg-gray-700 p-4 border-b-2 border-gray-50 flex flex-row text-black text-center relative'>
        <div className='grow'>Create NEAR Account</div>
        <XCircleIcon className='w-7 text-gray-300 flex-none'/>
      </header>
      <div className='p-6 text-center'>
        <p className='text-gray-200'>
          Enter an Account ID to use with your NEAR account.
          Your Account ID will be used for all NEAR operations,
          including sending and receiving assets.
        </p>
      </div>
      <div className='p-3'>
        <div className='text-center'>
          <Formik
            initialValues={initialValues}
            validationSchema={NEARAccountSchema}
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
                  <div className='mb-4 text-left text-gray-300'>
                    <label htmlFor='fullName' className='ml-1'>Full name</label>
                    <Field
                      name="fullName" 
                      type="text" 
                      placeholder="Ex. John Doe" 
                      className='w-full py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-md mr-4' 
                    />
                    {errors.fullName && touched.fullName ? (
                      <div className='text-red-500 text-left ml-1'>{errors.fullName}</div>
                    ) : null}
                  </div>
                  <div className='mb-4 text-left text-gray-300'>
                  <label htmlFor='Account ID' className='ml-1'>Account ID</label>
                    <Field 
                      name="accountID" 
                      type="text" 
                      placeholder="yourname" 
                      className='w-full py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-md mr-4' 
                    />
                    {errors.accountID && touched.accountID ? (
                      <div className='text-red-500 text-left ml-1'>{errors.accountID}</div>
                    ) : null}
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
        <div className='text-center mt-4'>
          <p className='text-gray-200 text-sm'>by clicking continue you must agree to near labs 
            <a href='#' className='text-blue-100'> Terms & Conditions ans Privacy Policy</a></p>
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

export default CreateNEARAccount;
