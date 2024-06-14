import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/pages/Layout.scss';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";

function Layout() {
    const [path, setPath] = useState(location.pathname);
    const [activeElement, setActiveElement] = useState("home");
    const [topBarOpen, setTopBarOpen] = useState(true);

    const [controlElement, setControlElement] = useState(<></>);
    const [contentElement, setContentElement] = useState(<></>);

    const isLoggedIn = localStorage.getItem("accessToken") ? true : false;
    const navigate = useNavigate();

    useEffect(() => {
        if (import.meta.env.MODE == "development") return;
        if (!isLoggedIn) navigate("/login");
    }, []);

    useEffect(() => {
        // Handle UI changes here
    })

    useEffect(() => {
        setPath(location.pathname);

        const pathArray = location.pathname.split("/");
        console.log(pathArray);

        if (pathArray.length == 2) {
            setActiveElement("home");
        }
    }, [location.pathname])

    return (
        <>
            <div className={`top-bar ${topBarOpen ? "" : "closed"}`}>
                <div className="toggle" onClick={() => { setTopBarOpen(!topBarOpen) }}><IoIosArrowDown /></div>
                <div className={`icon ${activeElement == "home" ? "active" : ""}`} onClick={() => setActiveElement("home")}>
                    <FaHome />
                </div>
                <div className={`icon ${activeElement == "dm" ? "active" : ""}`} onClick={() => setActiveElement("dm")}>
                    <FaRegMessage />
                </div>

                <div className="server-icons">

                </div>
            </div>

            <main>
                <div className="wrapper">
                    <div className="control">
                        <h1>Sombia</h1>
                        <div className="target">
                            {controlElement}
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="content">
                        {contentElement}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout;