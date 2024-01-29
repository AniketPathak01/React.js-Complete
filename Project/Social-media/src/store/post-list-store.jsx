import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.playload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.playload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.playload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      playload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      playload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      playload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
