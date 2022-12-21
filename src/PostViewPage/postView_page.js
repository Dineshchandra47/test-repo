import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./postView_page.css";

// const INSTACLONE_API = "https://instaclone-backened-api.onrender.com/api/posts";
function PostView() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://instaclone-backened-api.onrender.com/api/posts")
      .then((res) => res.json(res))
      .then((data) => {
        setPosts(data);
        console.log(posts);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <header>
        <div className="div-left">
          <div>
            <img src="./assets/icon.png" alt="logo" />
          </div>
          <div>
            <h1> Welcome to Instaclone</h1>
          </div>
        </div>
        <div className="div-right">
          <Link to="/createPost">
            <img
              className="flex-right"
              src="./assets/camera_icon.png"
              alt="cameraIcon"
            />
          </Link>
        </div>
      </header>
      <div className="cards-container">
        {posts.map((e, index) => {
          return (
            <div className="card-container">
                key={e.id}
              <div className="card-top">
                <div className="div-left">
                  <p>
                    <b>{e.name}</b>
                  </p>
                  <p>{e.location}</p>
                </div>
                <div className="div-right">
                  <img src="./assets/more_icon.png" alt="moreIcon" />
                </div>
              </div>
              <div>
                <img className="postImage" src={e.PostImage} alt="postImage" />
              </div>
              <div className="card-bottom">
                <div className="div-left">
                  <img src="./assets/heart_icon.png" alt="heartIcon" />
                  <img src="./assets/share_icon.png" alt="shareIcon" />
                </div>
                <div className="div-right">
                  <p>{e.date.split("T")[0]}</p>
                </div>
              </div>
              <div>
                <p>{e.likes} likes</p>
              </div>
              <div>
                <p>
                  <b>{e.description}</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostView;
