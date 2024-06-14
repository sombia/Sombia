import '../styles/components/Loader.scss';

function Loader() {
    return (
        <>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </>
    )
}

export default Loader;