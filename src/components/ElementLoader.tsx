import Loader from "./Loader";

function ElementLoader() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loader />
            </div>
        </>
    )
}

export default ElementLoader;