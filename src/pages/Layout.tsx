import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/pages/Layout.scss';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Layout() {
    const [path, setPath] = useState(location.pathname);
    const [activeElement, setActiveElement] = useState("home");
    const [topBarOpen, setTopBarOpen] = useState(true);

    const isLoggedIn = localStorage.getItem("accessToken") ? true : false;
    const navigate = useNavigate();

    useEffect(() => {
        if (import.meta.env.MODE == "development") return;
        if (!isLoggedIn) navigate("/login");
    }, []);

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname])

    return (
        <>
            <main>
                <div className={`top-bar ${topBarOpen ? "" : "closed"}`}>
                    <div className="toggle" onClick={() => { setTopBarOpen(!topBarOpen) }}><IoIosArrowDown /></div>
                    <div className="icon">
                        <FaHome />
                    </div>
                    <div className="server-icons">

                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout;