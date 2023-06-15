import Banner from "./banner";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  let name = "Add Your Post";
  let [title, setTitle] = useState("");
  let [summary, setSummary] = useState("");
  let [image, setImage] = useState("");
  let [author, setAuthor] = useState("");
  let [location, setLocation] = useState("");
  let navigate = useNavigate();

  let addPost = (e) => {
    e.preventDefault();
    let data = { author, title, summary, image, location };
    if (author && title && image && summary && location) {
      axios
        .post("http://localhost:4001/addpost", data)
        .then((res) => {
          alert(res.data.message);
          navigate('/home/food')
        })
        .catch((err) => {
          alert(err.data.message);
        });
    } else {
      alert("Please fill all the feilds");
    }
  };
  return (
    <div className="">
      <Banner data={name} />
      <div className="form col-5 row w-100 m-auto">
        <div className="image col-4 mt-3">
          <img
            src="https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            height="610px"
            className="rounded"
            alt=""
          />
        </div>
        <div className="posts col-8 mt-3 ">
          <h1 className="fw-bolder fs-1 text-warning mb-4">ADD POST</h1>
          <hr width="150px" />
          <form action="" onSubmit={addPost}>
            <div className="author">
              <label htmlFor="author" className="text-secondary">
                Author
              </label>
              <input
                type="text"
                className="form-control my-2"
                id="author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="title">
              <label htmlFor="" className="text-secondary">
                Title
              </label>
              <input
                name="title"
                className="form-control my-2"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="summary">
              <label htmlFor="" className="text-secondary">
                Summary
              </label>
              <textarea
                type="text"
                rows="5"
                name="summary"
                className="form-control my-2"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="image">
              <label htmlFor="" className="text-secondary">
                Image
              </label>
              <input
                name="image"
                className="form-control my-2"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="location">
              <label className="text-secondary">Location</label>
              <input
                name="location"
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-warning rounded-2 btn-lg my-4"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Posts;
