import { Suspense, lazy } from 'react';
import '../styles/pages/Login.scss';
import '../styles/components/LoginForm.scss';

const LoginForm = lazy(() => import('../components/LoginForm'));


function Login() {
    return (
        <>
            <div className="login-background"></div>
            <div className="login-container">
                <Suspense fallback={<div className="login-form" />}>
                    <LoginForm />
                </Suspense>

            </div>
        </>
    )
}

export default Login;