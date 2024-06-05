import { FaLock, FaUser } from 'react-icons/fa6';
import '../styles/components/LoginForm.scss';

import { useNavigate } from 'react-router-dom';

import SombiaLogo from '/sombia.png?url';
import { useTranslation } from 'react-i18next';

function LoginForm() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    return (
        <>
            <div className="login-form">
                <img src={SombiaLogo} alt="Sombia Logo" />
                <h1>{t("login.login")}</h1>
                <hr />
                <div className="input">
                    <input type="text" placeholder='Username' />
                    <FaUser />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' />
                    <FaLock />
                </div>
                <div className="fill" />
                <button className='button register' onClick={() => { navigate("/register"); }}>{t("login.register")}</button>
                <button className='button login'>{t("login.login")}</button>
            </div>
        </>
    )
}

export default LoginForm;