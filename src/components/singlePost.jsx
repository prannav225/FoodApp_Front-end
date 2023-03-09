import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./banner";

const SinglePost = () => {
    let title = "Food-Items"
    let { id } = useParams('')
    let [post, setpost] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`http://localhost:4001/posts/${id}`)
            const data = await res.data
            setpost(data);
        }
        fetchData();
    }, [])
    return (
        <div className="">
            <Banner data={title} />

            <div className="card  w-50 m-auto my-3">
                <div className="img text-center m-2">
                    <img src={post.image} alt="" width="260px" className="rounded" />
                </div>
                <div className="m-4">
                    <h1>{post.title}</h1>
                    <p className=" mx-1 my-3">{post.summary}</p>
                    <iframe src={post.location} frameborder="0" width="700px" height="300px" className="m-3 rounded-3">Location</iframe>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;