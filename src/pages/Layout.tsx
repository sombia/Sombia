import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Layout() {
    const isLoggedIn = localStorage.getItem("accessToken") ? true : false;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, []);

    return (
        <>
        </>
    )
}

export default Layout;