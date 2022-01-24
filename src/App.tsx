import React from 'react';
import SignUp from './features/signup/SignUp';
import CodeVerification from './features/signup/CodeVerification';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  signupData,
} from './features/signup/signupSlice';


const  App : React.FC<{}> = () => {
  const usedData = useAppSelector(signupData);
  return (
    <div className="container max-w-md">
      {usedData?.signupType === '' && <SignUp />}
      {usedData?.signupType !== '' && <CodeVerification />}
    </div>
  );
}

export default App;
