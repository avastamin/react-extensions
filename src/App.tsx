import React from 'react';
import SignUp from './features/signup/SignUp';
import CodeVerification from './features/signup/CodeVerification';
import CreateNEARAccount from './features/signup/CreateNEARAccount';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  signupData,
} from './features/signup/signupSlice';


const  App : React.FC<{}> = () => {
  const usedData = useAppSelector(signupData);
  console.log('usedData', usedData)
  return (
    <div className="container max-w-md">
      {usedData?.signupType === '' && !usedData?.isVerified && <SignUp />}
      {usedData?.signupType !== '' && !usedData?.isVerified && <CodeVerification />}
      {usedData?.isVerified && <CreateNEARAccount />}
    </div>
  );
}

export default App;
