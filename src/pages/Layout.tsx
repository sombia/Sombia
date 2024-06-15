import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/pages/Layout.scss';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
const ChatList = lazy(() => import("../components/ChatList"));
import ElementLoader from "../components/ElementLoader";

function Layout() {
    const [path, setPath] = useState(location.pathname);
    const [activeElement, setActiveElement] = useState("home");
    const [topBarOpen, setTopBarOpen] = useState(true);

    const [controlElement, setControlElement] = useState(<Suspense fallback={<ElementLoader />}><ChatList /></Suspense>);
    const [contentElement, setContentElement] = useState(<></>);

    const navigate = useNavigate();

    useEffect(() => {
        async function validate() {
            const data = await fetch(`${import.meta.env.VITE_API_URL}api/validate`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
            });

            if (data.status != 200) navigate("/login");
        }

        validate();
    }, []);

    useEffect(() => {
        // Handle UI changes here
        const pathArray = path.split("/");
        console.log(pathArray);

        if (pathArray.length == 2) {
            setActiveElement("home");
            setControlElement(<></>);
            setContentElement(<></>);
        } else {
            console.log(pathArray[2]);
            if (pathArray[2] == "chat") {
                setActiveElement("dm");
                setControlElement(<ChatList />);
                if (pathArray[3]) {
                    setContentElement(<>{`${pathArray[3]}'s chat selected`}</>);
                } else {
                    setContentElement(<>No Chat selected</>);
                }
            }
        }
    }, [path]);

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname])

    return (
        <>
            <div className={`top-bar ${topBarOpen ? "" : "closed"}`}>
                <div className="toggle" onClick={() => { setTopBarOpen(!topBarOpen) }}><IoIosArrowDown /></div>
                <div className={`icon ${activeElement == "home" ? "active" : ""}`} onClick={() => navigate("/app")}>
                    <FaHome />
                </div>
                <div className={`icon ${activeElement == "dm" ? "active" : ""}`} onClick={() => navigate("/app/chat")}>
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