import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-to-app.scss';

const SignToApp = () => (
	<div className='sign-forms'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignToApp;
