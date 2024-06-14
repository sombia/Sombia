import Loader from "./Loader";

import '../styles/components/ScreenLoader.scss';

function ScreenLoader() {
    return (
        <>
            <div className="screenloader">
                <h1>Sombia</h1>
                <Loader />
            </div>
        </>
    )
}

export default ScreenLoader;