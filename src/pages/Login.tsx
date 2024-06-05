import LoginForm from '../components/LoginForm';
import '../styles/pages/Login.scss';

function Login() {
    return (
        <>
            <div className="login-background"></div>
            <div className="login-container">
                <LoginForm />
            </div>
        </>
    )
}

export default Login;