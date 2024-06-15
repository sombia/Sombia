import { FaLock, FaUser } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';

import SombiaLogo from '/sombia.png?url';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function LoginForm() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const data = await fetch(`${import.meta.env.VITE_API_URL}api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (data.status == 200) {
            localStorage.setItem("accessToken", await data.text());
            navigate("/app");
        }
        return;
    }

    return (
        <>
            <div className="login-form">
                <img src={SombiaLogo} alt="Sombia Logo" />
                <h1>{t("login.login")}</h1>
                <hr />
                <div className="input">
                    <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
                    <FaUser />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <FaLock />
                </div>
                <div className="fill" />
                <button className='button switch' onClick={() => { navigate("/register"); }}>{t("login.register")}</button>
                <button className='button submit' onClick={() => { handleLogin() }}>{t("login.login")}</button>
            </div>
        </>
    )
}

export default LoginForm;