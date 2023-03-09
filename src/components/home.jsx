import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {

    let [img, setimg] = useState([
        {
            image: "/images/img1.avif",
            tittle: "Dosa",
            description: "Dosa with potato filling, sambar & chutney"
        },
        {
            image: "/images/img2.avif",
            tittle: "Idli / Idly",
            description: "Idly with sambar and chutney"
        },
        {
            image: "/images/img3.avif",
            tittle: "Poori",
            description: "Poori served with potato curry & chutney"
        },
        {
            image: "/images/img4.avif",
            tittle: "Tea",
            description: "A hot beverage enjoyed with milk & sugar"
        },
    ])
    return (
        <header className="Home ">
            <div className="container row m-auto">
                <div className="banner col-8">
                    <img src="https://images.unsplash.com/photo-1598233847491-f16487adee2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80" alt="" width="1000px" className="rounded" />
                </div>
                <div className="txt col-4 p-5 rounded">
                    <p className="text-secondary fs-5 mt-5">FEATURED POSTS</p>
                    <h1>A Hotel With a Sense of Humor</h1>
                    <hr />
                    <p style={{fontSize:"16px", textAlign:"justify"}}>Welcome to Babai Hotel, where we're all about good food, good friends, and good times! We're a unique hotel with a sense of humor, inspired by the classic Telugu film Babai Hotel. Our goal is to provide a warm and welcoming atmosphere where you can relax, unwind, and enjoy the company of others.</p>
                    <Link
                        to='/home/about'
                        className="btn btn-dark p-3 px-4"
                    >Read More  <span> → </span>  </Link>
                </div>
            </div>

            <section className="cards ms-5 ps-5">
                <div className="title">
                    <h1 className="fw-bolder fs-1 m-3">Recent Stories</h1>
                </div>
                <div className="contents d-flex justify-content-around">
                    <div className="stories col-6 d-flex flex-wrap">
                        {img.map(data => (
                            <div className="images m-2 h-50">
                                <img src={data.image} alt="" width="300px" className="rounded" />
                                <div className="title mt-3">
                                    <h3 className="text-secondary">{data.tittle}</h3>
                                    <p className="m-0">{data.description}</p>
                                    <a href="" className="text-decoration-none text-danger fs-5">Read More<span> → </span></a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-5">
                        <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded mb-5"  />
                    </div>
                </div>

            </section>

        </header>
    );
}

export default Home;