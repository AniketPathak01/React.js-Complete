import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

function PostList() {
  const { postList } = useContext(PostListContext);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}

export default PostList;
