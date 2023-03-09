const Banner = ({ data }) => {
    return (
        <div className="banner-img">
            <h1
                style={{ fontsize: "64px" }}
                className="text-light fs-1 fw-bolder">
                {data}</h1>
        </div>
    );
}

export default Banner;