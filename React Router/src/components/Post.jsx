import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function Post({ post }) {
  const {deletePost} = useContext(PostListContext)
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill delete"onClick={()=>deletePost(post.id)}>
        <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge hashtag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Post;
