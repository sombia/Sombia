import { FaLock, FaUser } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';

import SombiaLogo from '/sombia.png?url';
import { useTranslation } from 'react-i18next';

function RegisterForm() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    function handleRegistration() {
        if (import.meta.env.MODE == "development") navigate("/app");
        return;
    }

    return (
        <>
            <div className="register-form">
                <img src={SombiaLogo} alt="Sombia Logo" />
                <h1>{t("register.register")}</h1>
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
                <button className='button switch' onClick={() => { navigate("/login"); }}>{t("register.login")}</button>
                <button className='button submit' onClick={() => { handleRegistration() }}>{t("register.register")}</button>
            </div>
        </>
    )
}

export default RegisterForm;