import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";

const Food = () => {
    let title = "All posts"
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            let res= await axios.get("http://localhost:4001/posts")
            let data= await res.data
            setPosts(data)
            console.log(data);
        }
        fetchData()
    },[])
return ( <div className="food">
    <Banner data={title}/>
        <div className="display d-flex">
          {
            posts.map((item) => (
                <div className="card m-5 p-3 w-25 text-center flex-warap">
                    <div className="imgs ">
                    <img src={item.image} alt="" className="rounded" width="250px"/>
                    </div>
                    <div className="details mt-2">
                    <h3>{item.title}</h3>
                    <h5 className="">Author: {item.author}</h5>
                    <p className="text-justify">{item.summary}</p>
                    </div>
                    <div>
                    <Link to={`/home/food/${item._id}`} className="btn btn-warning ">Read more</Link>
                    </div>
                </div>
            ))
          }
        </div>
    </div> );
}
 
export default Food;