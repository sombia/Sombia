import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';

import SombiaLogo from '/sombia.png?url';
import { useTranslation } from 'react-i18next';

import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react';

function RegisterForm() {
    const navigate = useNavigate();

    const [token, setToken] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { t } = useTranslation();

    async function handleRegistration() {
        const data = await fetch(`${import.meta.env.VITE_API_URL}api/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, token })
        });

        if (data.status == 200) navigate("/login");
        return;
    }

    return (
        <>
            <div className="register-form">
                <img src={SombiaLogo} alt="Sombia Logo" />
                <h1>{t("register.register")}</h1>
                <hr />
                <div className="input">
                    <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
                    <FaUser />
                </div>
                <div className="input">
                    <input type="text" placeholder='E-Mail' onChange={e => setEmail(e.target.value)} />
                    <FaEnvelope />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <FaLock />
                </div>
                <Turnstile siteKey='0x4AAAAAAAclEfx4U8N2_hF8' onSuccess={setToken} />
                <div className="fill" />
                <button className='button switch' onClick={() => { navigate("/login"); }}>{t("register.login")}</button>
                <button className='button submit' onClick={() => { handleRegistration() }}>{t("register.register")}</button>
            </div>
        </>
    )
}

export default RegisterForm;