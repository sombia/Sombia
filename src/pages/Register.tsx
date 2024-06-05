import { Suspense, lazy } from 'react';
import '../styles/pages/Register.scss';
import '../styles/components/RegisterForm.scss';

const RegisterForm = lazy(() => import('../components/RegisterForm'));

function Register() {
    return (
        <>
            <div className="register-background"></div>
            <div className="register-container">
                <Suspense fallback={<div className="register-form" />}>
                    <RegisterForm />
                </Suspense>

            </div>
        </>
    )
}

export default Register;